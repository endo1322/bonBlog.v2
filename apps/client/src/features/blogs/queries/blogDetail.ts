import { QUERY_KEY } from "@/constants/queryKey";
import { getBlog } from "@/features/blogs/apis/blogs";
import { queryOptions } from "@tanstack/react-query";

export const blogDetailQuery = (id: string) =>
  queryOptions({
    queryKey: [QUERY_KEY.BLOG_DETAIL, id],
    queryFn: () => getBlog(id),
  });
