import type { BlogDetail, BlogSummary } from "@server/domain/models/blog";

export interface IBlogRepository {
  findAllBlogs(): Promise<BlogSummary[]>;
  findBlogById(id: string): Promise<BlogDetail>;
}
