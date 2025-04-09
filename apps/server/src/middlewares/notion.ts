import { NotionMarkdownConverter } from "@notion-md-converter/core";
import { Client } from "@notionhq/client";
import { createMiddleware } from "hono/factory";

export type NotionEnv = {
  Variables: {
    notion: Client;
    notionDatabaseId?: string;
    notionPageId?: string;
    notionMarkdownConverter: NotionMarkdownConverter;
  };
  Bindings: {
    NOTION_API_KEY: string;
    NOTION_DATABASE_ID: string;
  };
};

const notionMiddleware = createMiddleware<NotionEnv>(async (c, next) => {
  c.set("notion", new Client({ auth: c.env.NOTION_API_KEY }));
  c.set("notionMarkdownConverter", new NotionMarkdownConverter());
  await next();
});

export default notionMiddleware;
