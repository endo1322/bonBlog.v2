import corsMiddleware from "@server/middlewares/cors";
import { Hono } from "hono";
import blogs from "./blogs";

export const app = new Hono();

const router = app
  .use("*", corsMiddleware)
  .get("/", (c) => c.json({ message: "Hello Hono!" }))
  .route("/blogs", blogs);

export type AppRouteType = typeof router;
