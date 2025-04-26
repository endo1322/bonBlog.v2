import { GetAllBlogsDto, GetBlogDto } from "@server/application/dtos/blog";
import { NotFoundError } from "@server/domain/errors/NotFoundError";
import type { IBlogRepository } from "@server/domain/repositories/IBlogRepository";

export class BlogUseCase {
  private blogRepository: IBlogRepository;

  constructor(blogRepository: IBlogRepository) {
    this.blogRepository = blogRepository;
  }

  async getAllBlogs(): Promise<GetAllBlogsDto> {
    const blogs = await this.blogRepository.findAllBlogs();
    const publishedBlogs = blogs.filter((blog) => !blog.unPublished);
    return new GetAllBlogsDto(publishedBlogs);
  }

  async getBlogById(id: string): Promise<GetBlogDto> {
    const blog = await this.blogRepository.findBlogById(id);
    if (blog.unPublished) {
      throw new NotFoundError(`Blog with id ${id} is unpublished`);
    }
    return new GetBlogDto(blog);
  }
}
