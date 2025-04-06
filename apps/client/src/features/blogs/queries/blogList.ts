import { getBlogList } from "@/features/blogs/apis/blogList";
import { queryOptions } from "@tanstack/react-query";

export const blogListQuery = () =>
  queryOptions({
    queryKey: ["blog", "list"],
    queryFn: () => getBlogList(),
  });
