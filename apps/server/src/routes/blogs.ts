import BlogDIContainer from "@server/middlewares/blogDIContainer";
import notionMiddleware from "@server/middlewares/notion";
import { Hono } from "hono";

const blogs = new Hono()
  .use("*", notionMiddleware)
  .use("*", BlogDIContainer)
  .get("/", async (c) => {
    const blogUseCase = c.get("blogUseCase");
    const result = await blogUseCase.getAllBlogs();
    return c.json(result.blogs);
  })
  .get("/:id", async (c) => {
    const blogUseCase = c.get("blogUseCase");
    const id = c.req.param("id");
    const result = await blogUseCase.getBlogById(id);
    return c.json(result.blog);
  });

export default blogs;
