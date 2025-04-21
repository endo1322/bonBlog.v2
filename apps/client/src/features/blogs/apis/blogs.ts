import rpcClient, { type ExcludeErrorResponseType, isErrorType } from "@/apis";
import type { InferHonoType } from "@bonblogv2/server";

export const getBlogs = async () => {
  const res = await rpcClient.blogs.$get();
  if (res.status === 200) return await res.json();
  const data = await res.json();
  if (isErrorType(data)) throw new Error(data.message);
  throw new Error("Unknown error");
};

export const getBlog = async (id: string) => {
  const res = await rpcClient.blogs[":id"].$get({ param: { id: id } });
  if (res.status === 200) return await res.json();
  const data = await res.json();
  if (isErrorType(data)) throw new Error(data.message);
  throw new Error("Unknown error");
};

export type GetBlogsResponseType = ExcludeErrorResponseType<
  InferHonoType<typeof rpcClient.blogs.$get>
>;
export type GetBlogResponseType = ExcludeErrorResponseType<
  InferHonoType<(typeof rpcClient.blogs)[":id"]["$get"]>
>;
