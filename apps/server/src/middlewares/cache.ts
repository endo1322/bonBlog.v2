import type { Context } from "hono";
import { createMiddleware } from "hono/factory";

const STALE_WHILE_REVALIDATE_TTL = 60 * 60;
const CACHE_MAX_AGE = 60 * 60 * 24 * 30;
const CACHE_REVALIDATION_HEADER = "x-cache-revalidation";

type CacheEnv = {
  Bindings: {
    CACHE: KVNamespace;
  };
};

const generateCacheKey = (path: string, params: Record<string, string>): string => {
  const sortedParams = Object.entries(params)
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return `${path}${sortedParams ? `?${sortedParams}` : ""}`;
};

const updateCache = async (c: Context, cacheKey: string, responseBody: string) => {
  await c.env.CACHE.put(cacheKey, responseBody, {
    expirationTtl: STALE_WHILE_REVALIDATE_TTL + CACHE_MAX_AGE,
    metadata: {
      expiration: STALE_WHILE_REVALIDATE_TTL * 1000 + new Date().getTime(),
    },
  });
};

export const cacheMiddleware = createMiddleware<CacheEnv>(async (c, next) => {
  if (c.req.header(CACHE_REVALIDATION_HEADER)) return next();

  const cacheKey = generateCacheKey(c.req.path, c.req.query());
  const { metadata, value: cachedResponse } = await c.env.CACHE.getWithMetadata<{
    expiration: number;
  }>(cacheKey);
  const remainingTTL = (metadata?.expiration ?? 0) - new Date().getTime();

  if (cachedResponse && remainingTTL > 0) {
    return c.json(JSON.parse(cachedResponse));
  }

  if (cachedResponse && remainingTTL <= 0) {
    const staleResponse = c.json(JSON.parse(cachedResponse));

    c.executionCtx.waitUntil(
      (async () => {
        try {
          const revalidationRequest = new Request(c.req.url, {
            method: c.req.method,
            headers: new Headers({
              ...Object.fromEntries(c.req.raw.headers),
              [CACHE_REVALIDATION_HEADER]: "true",
            }),
          });

          const revalidationResponse = await fetch(revalidationRequest);
          if (revalidationResponse.status === 200) {
            const responseBody = await revalidationResponse.text();
            await updateCache(c, cacheKey, responseBody);
          }
        } catch (error) {
          console.error("Failed to update cache:", error);
        }
      })(),
    );

    return staleResponse;
  }

  await next();

  if (c.res.status === 200) {
    const responseBody = await c.res.clone().text();
    await updateCache(c, cacheKey, responseBody);
    return c.json(JSON.parse(responseBody));
  }
});
