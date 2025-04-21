import { HttpError } from "@/apis/HttpError";
import { serverUrl } from "@/constants/env";
import { type InferHonoType, createHonoClient } from "@bonblogv2/server";

export const rpcClient = createHonoClient(serverUrl);

export const handleApiResponse = async <T>(response: Response): Promise<T> => {
  const data = await response.json();

  if (response.status !== 200) {
    throw new HttpError(response.status, data.message);
  }

  return data;
};

export const getIndex = async () => {
  const res = await rpcClient.index.$get();
  return await handleApiResponse<GetIndexResponseType>(res);
};

export type GetIndexResponseType = InferHonoType<typeof rpcClient.index.$get>;

export type ErrorResponseType = { message: string };
export type ExcludeErrorResponseType<T> = Exclude<T, ErrorResponseType>;

export default rpcClient;
