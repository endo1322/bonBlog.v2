import rpcClient from "@/apis";

export const getBlogList = async () => {
  const res = await rpcClient.blogs.$get();
  return await res.json();
};
