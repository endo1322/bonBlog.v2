import { Hono } from "hono";
import { hc } from "hono/client";
import { cors } from "hono/cors";

type Bindings = {
  LOCAL_CLIENT_URL: string;
  CLOUDFLARE_CLIENT_DOMAIN: string;
};

const app = new Hono<{ Bindings: Bindings }>();

const router = app
  .use("*", async (c, next) => {
    // TODO: github actionsからの環境変数の取得方法を調査
    const corsMiddlewareHandler = cors({
      origin: (origin, c) => {
        return origin.endsWith(c.env.CLOUDFLARE_CLIENT_DOMAIN) ? origin : c.env.LOCAL_CLIENT_URL;
      },
    });
    return corsMiddlewareHandler(c, next);
  })
  .get("/", (c) => {
    return c.json({ message: "Hello Hono!" });
  });

export default app;

export type AppRouteType = typeof router;

type ClientType = typeof hc<AppRouteType>;

export const createClient = (...args: Parameters<ClientType>): ReturnType<ClientType> => {
  return hc<AppRouteType>(...args);
};
