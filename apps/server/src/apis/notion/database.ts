import type { Context } from "hono";
import { createNotionClient } from ".";
import type { EnvBindings } from "../..";

const queryDatabase = async (c: Context<{ Bindings: EnvBindings }>) => {
  const notionClient = createNotionClient(c);
  return await notionClient.databases.query({ database_id: c.env.NOTION_DATABASE_ID });
};

export const queryBlogDatabase = async (c: Context<{ Bindings: EnvBindings }>) => {
  const res = await queryDatabase(c);
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return res.results.map((result: any) => ({
    id: result.id,
    created_at: result.properties,
    updated_at: result.last_edited_time,
    title: result.properties.title.title[0].plain_text,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    tag: result.properties.tag.multi_select.map((tag: any) => ({ id: tag.id, name: tag.name })),
  }));
};
