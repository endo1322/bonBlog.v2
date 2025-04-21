import { NotFoundError } from "@server/domain/errors/NotFoundError";
import BlogDIContainer from "@server/middlewares/blogDIContainer";
import notionMiddleware from "@server/middlewares/notion";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

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
    try {
      const result = await blogUseCase.getBlogById(id);
      return c.json(result.blog);
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw new HTTPException(404, { message: `指定されたブログ（ID: ${id}）は存在しません。` });
      }
      throw new HTTPException(500, { message: "予期せぬエラーが発生しました。" });
    }
  });

export default blogs;
