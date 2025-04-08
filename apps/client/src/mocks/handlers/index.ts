import { serverUrl } from "@/constants/env";
import { http, HttpResponse } from "msw";
import blogsHandlers from "./blogs";

export const handlers = [
  http.get(`${serverUrl}`, () => HttpResponse.json({ messages: "Hello Hono!" }, { status: 200 })),
  ...blogsHandlers,
];

export default handlers;
