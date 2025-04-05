import { serverUrl } from "@/constants/env";
import { type InferHonoType, createHonoClient } from "@bonblogv2/server/src";

export const rpcClient = createHonoClient(serverUrl);

export type BlogsResponseType = InferHonoType<typeof rpcClient.blogs.$get>;

export default rpcClient;
