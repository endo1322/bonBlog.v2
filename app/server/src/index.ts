import { Hono } from "hono";
import { hc } from "hono/client";
import { cors } from "hono/cors";

const app = new Hono();

const router = app
  .use("/", cors({ origin: "http://localhost:5173" }))
  .get("/", (c) => {
    return c.json({ message: "Hello Hono!" });
  });

export default app;

export type AppRouteType = typeof router;

type ClientType = typeof hc<AppRouteType>;

export const createClient = (
  ...args: Parameters<ClientType>
): ReturnType<ClientType> => {
  return hc<AppRouteType>(...args);
};
