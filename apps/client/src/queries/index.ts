import { getIndex } from "@/apis";
import { HttpError } from "@/apis/HttpError";
import { QUERY_KEY } from "@/constants/queryKey";
import { QueryClient, queryOptions } from "@tanstack/react-query";

const RETRY_COUNT = 3;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: (failureCount, error) => {
        if (failureCount >= RETRY_COUNT) return false;
        if (error instanceof HttpError) {
          if (error.status >= 400 && error.status < 500) return false;
        }
        return true;
      },
    },
  },
});

export const helloQuery = () =>
  queryOptions({
    queryKey: QUERY_KEY.HELLO,
    queryFn: () => getIndex(),
  });
