import { serverUrl } from "@/constants/env";
import { type InferHonoType, createHonoClient } from "@bonblogv2/server/src";

export const rpcClient = createHonoClient(serverUrl);

export const getIndex = async () => {
  const res = await rpcClient.index.$get();
  return await res.json();
};

export type GetIndexResponseType = InferHonoType<typeof rpcClient.index.$get>;

export type ErrorResponseType = { message: string };
export type ExcludeErrorResponseType<T> = Exclude<T, ErrorResponseType>;

export const isErrorType = (data: unknown): data is ErrorResponseType => {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof (data as ErrorResponseType).message === "string"
  );
};

export default rpcClient;
