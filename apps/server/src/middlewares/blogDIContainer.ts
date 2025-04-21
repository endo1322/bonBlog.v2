import { BlogUseCase } from "@server/application/tmp/BlogUseCase";
import { BlogRepository } from "@server/infrastructure/repositories/notion/BlogRepositoryImpl";
import { createMiddleware } from "hono/factory";
import type { NotionEnv } from "./notion";

type DIVariables = {
  Variables: {
    blogRepository: BlogRepository;
    blogUseCase: BlogUseCase;
  };
} & NotionEnv;

const BlogDIContainer = createMiddleware<DIVariables>(async (c, next) => {
  const notion = c.get("notion");
  const notionMarkdownConverter = c.get("notionMarkdownConverter");
  const databaseId = c.env.NOTION_DATABASE_ID;

  const blogRepository = new BlogRepository(notion, notionMarkdownConverter, databaseId);
  const blogUseCase = new BlogUseCase(blogRepository);

  c.set("blogRepository", blogRepository);
  c.set("blogUseCase", blogUseCase);
  await next();
});

export default BlogDIContainer;
