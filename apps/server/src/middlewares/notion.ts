import { Client } from "@notionhq/client";
import { createMiddleware } from "hono/factory";

export type NotionEnv = {
  Variables: {
    notion: Client;
    notionDatabaseId: string;
  };
  Bindings: {
    NOTION_API_KEY: string;
    NOTION_DATABASE_ID: string;
  };
};

const notionMiddleware = createMiddleware<NotionEnv>(async (c, next) => {
  c.set("notionDatabaseId", c.env.NOTION_DATABASE_ID);
  c.set("notion", new Client({ auth: c.env.NOTION_API_KEY }));
  await next();
});

export default notionMiddleware;
