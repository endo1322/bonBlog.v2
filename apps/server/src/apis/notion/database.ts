import type { Context } from "hono";
import type { NotionEnv } from "../../middlewares/notion";

export const queryDatabase = async (c: Context<NotionEnv>) => {
  const notion = c.var.notion;
  const databaseId = c.var.notionDatabaseId;
  if (!databaseId) throw new Error("Database ID is not set");
  return await notion.databases.query({ database_id: databaseId });
};
