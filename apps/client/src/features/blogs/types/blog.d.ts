import type { GetBlogsResponseType } from "@/features/blogs/apis/blogs";

export type Blogs = GetBlogsResponseType;

export type Tags = Blogs[number]["tags"];
