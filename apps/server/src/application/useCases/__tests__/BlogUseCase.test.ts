import { GetAllBlogsDto, GetBlogDto } from "@server/application/dtos/blog";
import { BlogUseCase } from "@server/application/useCases/BlogUseCase";
import { NotFoundError } from "@server/domain/errors/NotFoundError";
import type { IBlogRepository } from "@server/domain/repositories/IBlogRepository";
import type { Mocked } from "vitest";

const mockFindAllBlogs = vi.fn();
const mockFindBlogById = vi.fn();
const mockRepository: Mocked<IBlogRepository> = {
  findAllBlogs: mockFindAllBlogs,
  findBlogById: mockFindBlogById,
};

const testUseCase = new BlogUseCase(mockRepository);

describe("BlogUseCase", () => {
  describe("getAllBlogs", () => {
    describe("success", () => {
      it("findAllBlogsが呼ばれ、GetAllBlogsDtoのオブジェクトを返す", async () => {
        mockFindAllBlogs.mockResolvedValueOnce([]);

        const result = await testUseCase.getAllBlogs();

        expect(mockRepository.findAllBlogs).toHaveBeenCalled();
        expect(result).toBeInstanceOf(GetAllBlogsDto);
      });

      it("blogが公開の時レスポンスに含み、非公開の時レスポンスに含まない", async () => {
        mockFindAllBlogs.mockResolvedValueOnce([
          { id: "unpublished-blog-id", unPublished: true },
          { id: "published-blog-id", unPublished: false },
        ]);

        const result = await testUseCase.getAllBlogs();

        expect(result.blogs).toStrictEqual([{ id: "published-blog-id" }]);
      });
    });
  });
  describe("getBlogById", () => {
    describe("success", () => {
      it("findBlogByIdが呼ばれ、GetBlogDtoのオブジェクトを返す", async () => {
        mockFindBlogById.mockResolvedValueOnce({});

        const id = "mock-id";
        const result = await testUseCase.getBlogById(id);

        expect(mockRepository.findBlogById).toHaveBeenCalledWith(id);
        expect(result).toBeInstanceOf(GetBlogDto);
      });
      it("blogが公開の時、レスポンスに含む", async () => {
        mockFindBlogById.mockResolvedValueOnce({ id: "published-blog-id", unPublished: false });

        const result = await testUseCase.getBlogById("published-blog-id");

        expect(result.blog).toStrictEqual({ id: "published-blog-id" });
      });
    });
    describe("error", () => {
      it("blogが非公開の時、NotFoundエラーを吐く", async () => {
        mockFindBlogById.mockResolvedValueOnce({ unPublished: true });

        await expect(testUseCase.getBlogById("unpublished-blog-id")).rejects.toThrowError(
          new NotFoundError("Blog with id unpublished-blog-id is unpublished"),
        );
      });
    });
  });
});
