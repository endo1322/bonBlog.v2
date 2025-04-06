import rpcClient from "@/apis";
import type { InferHonoType } from "@bonblogv2/server/src";

export const getBlogs = async () => {
  const res = await rpcClient.blogs.$get();
  return await res.json();
};

export type GetBlogsResponseType = InferHonoType<typeof rpcClient.blogs.$get>;
