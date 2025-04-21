import rpcClient, { type ExcludeErrorResponseType, handleApiResponse } from "@/apis";
import type { InferHonoType } from "@bonblogv2/server";

export const getBlogs = async () => {
  const res = await rpcClient.blogs.$get();
  return await handleApiResponse<GetBlogsResponseType>(res);
};

export const getBlog = async (id: string) => {
  const res = await rpcClient.blogs[":id"].$get({ param: { id: id } });
  return await handleApiResponse<GetBlogResponseType>(res);
};

export type GetBlogsResponseType = ExcludeErrorResponseType<
  InferHonoType<typeof rpcClient.blogs.$get>
>;
export type GetBlogResponseType = ExcludeErrorResponseType<
  InferHonoType<(typeof rpcClient.blogs)[":id"]["$get"]>
>;
