import { PATH } from "@/constants/path";

export const getBlogDetailPath = (id: string) => {
  return PATH.BLOG_DETAIL.replace(":id", id);
};
