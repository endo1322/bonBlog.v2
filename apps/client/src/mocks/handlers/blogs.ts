import { serverUrl } from "@/constants/env";
import { mockBlogsResponseData } from "@/mocks/data/blogs";
import { http, HttpResponse } from "msw";

const mockGetBlogs200SuccessHandler = http.get(`${serverUrl}/blogs`, () =>
  HttpResponse.json(mockBlogsResponseData, { status: 200 }),
);

export const mockGetBlogs500ErrorHandler = http.get(`${serverUrl}/blogs`, () =>
  HttpResponse.json("", { status: 500 }),
);

export default [mockGetBlogs200SuccessHandler];
