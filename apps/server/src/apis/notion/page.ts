import { $getPageFullContent } from "@notion-md-converter/core";
import type { NotionEnv } from "@server/middlewares/notion";
import type { Context } from "hono";

export const retrievePage = async (c: Context<NotionEnv>) => {
  const notion = c.var.notion;
  const pageId = c.get("notionPageId");
  if (!pageId) throw new Error("Page ID is not set");
  return await notion.pages.retrieve({ page_id: pageId });
};

export const getPageFullMdContent = async (c: Context<NotionEnv>) => {
  const notion = c.var.notion;
  const executor = c.var.notionMarkdownConverter;
  const pageId = c.get("notionPageId");
  if (!pageId) throw new Error("Page ID is not set");

  const content = await $getPageFullContent(notion, pageId);
  return executor.execute(content);
};
