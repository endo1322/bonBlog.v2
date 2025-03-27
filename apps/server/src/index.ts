import { Hono } from "hono";
import { hc } from "hono/client";
import { cors } from "hono/cors";

type Bindings = {
  CLIENT_URLS: string[];
  CF_CLIENT_DOMAIN: string;
};

const app = new Hono<{ Bindings: Bindings }>();

const router = app
  .use("*", async (c, next) => {
    const corsMiddlewareHandler = cors({
      origin:
        c.env.CF_CLIENT_DOMAIN !== ""
          ? (origin) => {
              return origin.endsWith(c.env.CF_CLIENT_DOMAIN) ? origin : null;
            }
          : c.env.CLIENT_URLS,
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
