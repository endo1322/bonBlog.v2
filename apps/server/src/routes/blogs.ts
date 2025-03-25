import { Hono } from "hono";
import type { EnvBindings } from "..";
import { queryBlogDatabase } from "../apis/notion/database";

const blogs = new Hono<{ Bindings: EnvBindings }>().get("/", async (c) => {
  const data = await queryBlogDatabase(c);
  return c.json(data);
});

export default blogs;
