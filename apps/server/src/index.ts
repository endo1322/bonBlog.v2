import { Hono } from "hono";
import { hc } from "hono/client";
import { cors } from "hono/cors";
import blogs from "./routes/blogs";

export type Bindings = {
  CLIENT_URL: string;
};

const app = new Hono<{ Bindings: Bindings }>();

const router = app
  .use("*", async (c, next) => {
    // TODO: github actionsからの環境変数の取得方法を調査
    const corsMiddlewareHandler = cors({
      origin: c.env.CLIENT_URL || "",
    });
    return corsMiddlewareHandler(c, next);
  })
  .get("/", (c) => {
    return c.json({ message: "Hello Hono!" });
  })
  .route("/blogs", blogs);

export default app;

export type AppRouteType = typeof router;

type ClientType = typeof hc<AppRouteType>;

export const createClient = (...args: Parameters<ClientType>): ReturnType<ClientType> => {
  return hc<AppRouteType>(...args);
};
