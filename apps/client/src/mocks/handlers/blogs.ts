import { serverUrl } from "@/constants/env";
import { mockBlogsResponseData } from "@/mocks/data/blogs";
import { http, HttpResponse } from "msw";

export const blogsHandlers = [
  http.get(`${serverUrl}/blogs`, () => HttpResponse.json(mockBlogsResponseData, { status: 200 })),
];

export default blogsHandlers;
