import corsMiddleware from "@server/middlewares/cors";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import blogs from "./blogs";

export const app = new Hono();

const router = app
  .use("*", corsMiddleware)
  .onError((err, c) => {
    if (err instanceof HTTPException) {
      console.error(`HTTPException: ${err.message} (Status: ${err.status})`);
      return c.json({ message: err.message }, err.status);
    }
    console.error(`Error: ${err.message}`);
    return c.json({ message: "Internal Server Error" }, 500);
  })
  .get("/", (c) => c.json({ message: "Hello Hono!" }))
  .route("/blogs", blogs);

export type AppRouteType = typeof router;
