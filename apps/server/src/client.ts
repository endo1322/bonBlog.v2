import type { AppRouteType } from "@server/routes";
import { type InferResponseType, hc } from "hono/client";

export const createHonoClient = (
  ...args: Parameters<typeof hc<AppRouteType>>
): ReturnType<typeof hc<AppRouteType>> => {
  return hc<AppRouteType>(...args);
};

export type InferHonoType<T> = InferResponseType<T>;
