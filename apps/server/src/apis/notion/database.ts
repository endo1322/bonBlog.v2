import type { Context } from "hono";
import type { NotionEnv } from "../../middlewares/notion";

const queryDatabase = async (c: Context<NotionEnv>) => {
  const notion = c.var.notion;
  const databaseId = c.var.notionDatabaseId;
  return await notion.databases.query({ database_id: databaseId });
};

export const queryBlogDatabase = async (c: Context<NotionEnv>) => {
  const res = await queryDatabase(c);
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return res.results.map((result: any) => ({
    id: result.id as string,
    createdAt: result.created_time as string,
    updatedAt: result.last_edited_time as string,
    title: result.properties.title.title[0].plain_text as string,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    tags: result.properties.tag.multi_select.map((tag: any) => ({
      id: tag.id,
      name: tag.name,
    })) as { id: string; name: string }[],
  }));
};
