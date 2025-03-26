import { type InferHonoType, createHonoClient } from "@bonblogv2/server/src";

const serverUrl = import.meta.env.VITE_SERVER_URL;
export const rpcClient = createHonoClient(serverUrl);

export type BlogsResponseType = InferHonoType<typeof rpcClient.blogs.$get>;

export default rpcClient;
