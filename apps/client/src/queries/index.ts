import { getIndex } from "@/apis";
import { QUERY_KEY } from "@/constants/queryKey";
import { QueryClient, queryOptions } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

export const helloQuery = () =>
  queryOptions({
    queryKey: QUERY_KEY.HELLO,
    queryFn: () => getIndex(),
  });
