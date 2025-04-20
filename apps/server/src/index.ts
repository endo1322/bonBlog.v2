import corsMiddleware from "@server/middlewares/cors";
import blogs from "@server/routes/blogs";
import { Hono } from "hono";
import { type InferResponseType, hc } from "hono/client";

const app = new Hono();

const router = app
  .use("*", corsMiddleware)
  .get("/", (c) => {
    return c.json({ message: "Hello Hono!" });
  })
  .route("/blogs", blogs);

export default app;

export type AppRouteType = typeof router;

type ClientType = typeof hc<AppRouteType>;

export const createHonoClient = (...args: Parameters<ClientType>): ReturnType<ClientType> => {
  return hc<AppRouteType>(...args);
};

export type InferHonoType<T> = InferResponseType<T>;
