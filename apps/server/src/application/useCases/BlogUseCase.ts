import { GetAllBlogsDto, GetBlogDto } from "@server/application/dtos/blog";
import type { IBlogRepository } from "@server/domain/repositories/IBlogRepository";

export class BlogUseCase {
  private blogRepository: IBlogRepository;

  constructor(blogRepository: IBlogRepository) {
    this.blogRepository = blogRepository;
  }

  async getAllBlogs(): Promise<GetAllBlogsDto> {
    const blogs = await this.blogRepository.findAllBlogs();
    return new GetAllBlogsDto(blogs);
  }

  async getBlogById(id: string): Promise<GetBlogDto> {
    const blog = await this.blogRepository.findBlogById(id);
    return new GetBlogDto(blog);
  }
}
