import { getBlogs } from "@/features/blogs/apis/blogs";
import { queryOptions } from "@tanstack/react-query";

export const blogListQuery = () =>
  queryOptions({
    queryKey: ["blog", "list"],
    queryFn: () => getBlogs(),
  });
