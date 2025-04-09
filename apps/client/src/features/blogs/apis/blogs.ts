import rpcClient from "@/apis";
import type { InferHonoType } from "@bonblogv2/server/src";

export const getBlogs = async () => {
  const res = await rpcClient.blogs.$get();
  if (res.status !== 200) {
    throw new Error("Internal server error");
  }
  return await res.json();
};

export const getBlog = async (id: string) => {
  const res = await rpcClient.blogs[":id"].$get({ param: { id: id } });
  if (res.status !== 200) {
    throw new Error("Internal server error");
  }
  return await res.json();
};

export type GetBlogsResponseType = InferHonoType<(typeof rpcClient.blogs)["$get"]>;
export type GetBlogResponseType = InferHonoType<(typeof rpcClient.blogs)[":id"]["$get"]>;
