import { serverUrl } from "@/constants/env";
import { mockGetBlog200ResponseData, mockGetBlogs200ResponseData } from "@/mocks/data/blogs";
import { mockErrorResponseData } from "@/mocks/data/error";
import { http, HttpResponse } from "msw";

const mockGetBlogs200SuccessHandler = http.get(`${serverUrl}/blogs`, () =>
  HttpResponse.json(mockGetBlogs200ResponseData, { status: 200 }),
);

const mockGetBlog200SuccessHandler = http.get(`${serverUrl}/blogs/:id`, () =>
  HttpResponse.json(mockGetBlog200ResponseData, { status: 200 }),
);

export const mockGetBlogs500ErrorHandler = http.get(`${serverUrl}/blogs`, () =>
  HttpResponse.json(mockErrorResponseData, { status: 500 }),
);

export default [mockGetBlogs200SuccessHandler, mockGetBlog200SuccessHandler];
