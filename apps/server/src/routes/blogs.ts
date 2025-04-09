import { queryDatabase } from "@server/apis/notion/database";
import notionMiddleware from "@server/middlewares/notion";
import { Hono } from "hono";

const blogs = new Hono().get("/", notionMiddleware, async (c) => {
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
      })),
    );
  } catch (error) {
    return c.json({ message: "Failed to fetch database", error: error }, 500);
  }
});
export default blogs;
