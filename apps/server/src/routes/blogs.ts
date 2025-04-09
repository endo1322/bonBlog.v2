import { queryDatabase } from "@server/apis/notion/database";
import { getPageFullMdContent, retrievePage } from "@server/apis/notion/page";
import { mdFormatter } from "@server/libs/md";
import notionMiddleware from "@server/middlewares/notion";
import { Hono } from "hono";

const blogs = new Hono()
  .get("/", notionMiddleware, async (c) => {
    try {
      c.set("notionDatabaseId", c.env.NOTION_DATABASE_ID);
      const res = await queryDatabase(c);
      return c.json(
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        res.results.map((result: any) => ({
          id: result.id as string,
          createdAt: result.created_time as string,
          updatedAt: result.last_edited_time as string,
          title: result.properties.title.title[0].plain_text as string,
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          tags: result.properties.tag.multi_select.map((tag: any) => ({
            id: tag.id,
            name: tag.name,
          })) as { id: string; name: string }[],
        })) as {
          id: string;
          createdAt: string;
          updatedAt: string;
          title: string;
          tags: { id: string; name: string }[];
        }[],
      );
    } catch (error) {
      console.error("Error fetching database:", error);
      return c.json({ message: "Failed to fetch database" }, 500);
    }
  })
  .get("/:id", notionMiddleware, async (c) => {
    try {
      c.set("notionPageId", c.req.param("id"));
      const [page, mdContent] = await Promise.all([
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        retrievePage(c) as Promise<any>,
        getPageFullMdContent(c),
      ]);
      return c.json({
        id: page.id as string,
        createdAt: page.created_time as string,
        updatedAt: page.last_edited_time as string,
        title: page.properties.title.title[0].plain_text as string,
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        tags: page.properties.tag.multi_select.map((tag: any) => ({
          id: tag.id,
          name: tag.name,
        })) as { id: string; name: string }[],
        content: mdFormatter(mdContent),
      });
    } catch (error) {
      console.error("Error fetching page:", error);
      return c.json({ message: "Failed to fetch page" }, 500);
    }
  });
export default blogs;
