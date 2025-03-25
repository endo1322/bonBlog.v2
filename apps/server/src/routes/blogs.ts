import { Hono } from "hono";
import { queryBlogDatabase } from "../apis/notion/database";
import notionMiddleware from "../middlewares/notion";

const blogs = new Hono().get("/", notionMiddleware, async (c) => {
  const data = await queryBlogDatabase(c);
  return c.json(data);
});

export default blogs;
