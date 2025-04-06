import { serverUrl } from "@/constants/env";
import { createHonoClient } from "@bonblogv2/server/src";

export const rpcClient = createHonoClient(serverUrl);

export default rpcClient;
