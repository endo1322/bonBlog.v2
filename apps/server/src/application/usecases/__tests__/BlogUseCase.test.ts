import { GetAllBlogsDto, GetBlogDto } from "@server/application/dtos/blog";
import { BlogUseCase } from "@server/application/usecases/BlogUseCase";
import type { IBlogRepository } from "@server/domain/repositories/IBlogRepository";
import type { Mocked } from "vitest";

const mockRepository: Mocked<IBlogRepository> = {
  findAllBlogs: vi.fn().mockResolvedValueOnce([]),
  findBlogById: vi.fn().mockResolvedValueOnce({}),
};
const testUseCase = new BlogUseCase(mockRepository);

describe("BlogUseCase", () => {
  describe("getAllBlogs", () => {
    it("findAllBlogsが呼ばれ、GetAllBlogsDtoのオブジェクトを返す", async () => {
      const result = await testUseCase.getAllBlogs();

      expect(mockRepository.findAllBlogs).toHaveBeenCalled();
      expect(result).toBeInstanceOf(GetAllBlogsDto);
    });
  });
  describe("getBlogById", () => {
    it("findBlogByIdが呼ばれ、GetBlogDtoのオブジェクトを返す", async () => {
      const id = "mock-id";
      const result = await testUseCase.getBlogById(id);

      expect(mockRepository.findBlogById).toHaveBeenCalledWith(id);
      expect(result).toBeInstanceOf(GetBlogDto);
    });
  });
});
