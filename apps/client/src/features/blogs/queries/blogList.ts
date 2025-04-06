import { QUERY_KEY } from "@/constants/queryKey";
import { getBlogs } from "@/features/blogs/apis/blogs";
import { queryOptions } from "@tanstack/react-query";

export const blogListQuery = () =>
  queryOptions({
    queryKey: QUERY_KEY.BLOG_LIST,
    queryFn: () => getBlogs(),
  });
