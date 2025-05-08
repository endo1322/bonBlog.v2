import { createMiddleware } from "hono/factory";

const CACHE_TTL = 60 * 60;

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

const cacheMiddleware = createMiddleware<CacheEnv>(async (c, next) => {
  const cacheKey = generateCacheKey(c.req.path, c.req.query());
  const cachedResponse = await c.env.CACHE.get(cacheKey);

  if (cachedResponse) {
    return c.json(JSON.parse(cachedResponse));
  }

  await next();

  if (c.res.status === 200) {
    const response = c.res.clone();
    const responseBody = await response.text();
    await c.env.CACHE.put(cacheKey, responseBody, {
      expirationTtl: CACHE_TTL,
    });
    return c.json(JSON.parse(responseBody));
  }
});

export default cacheMiddleware;
