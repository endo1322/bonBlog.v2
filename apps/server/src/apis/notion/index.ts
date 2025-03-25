import { Client } from "@notionhq/client";
import type { Context } from "hono";
import type { EnvBindings } from "../..";

export const createNotionClient = (c: Context<{ Bindings: EnvBindings }>) => {
  return new Client({ auth: c.env.NOTION_API_KEY });
};
