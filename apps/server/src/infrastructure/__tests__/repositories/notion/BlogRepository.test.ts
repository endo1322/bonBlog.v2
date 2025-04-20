import { BlogDetail, BlogSummary } from "@server/domain/models/blog";
import { BlogRepository } from "@server/infrastructure/repositories/notion/BlogRepositoryImpl";
import { mockNotionDatabaseResponse } from "./mocks/notionDatabaseResponse";
import { mockNotionPageResponse } from "./mocks/notionPageResponse";

vi.mock("@notion-md-converter/core", () => ({
  $getPageFullContent: vi.fn().mockResolvedValue("# テスト本文"),
}));

vi.mock("@server/utils/markdown", () => ({
  markdownFormatter: vi.fn((input: string) => input),
}));

const mockNotionClient = {
  databases: {
    query: vi.fn().mockResolvedValue(mockNotionDatabaseResponse),
  },
  pages: {
    retrieve: vi.fn().mockResolvedValue(mockNotionPageResponse),
  },
};

const mockNotionMarkdownConverter = {
  execute: vi.fn().mockImplementation((input: string) => input),
};

const testRepository = new BlogRepository(
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  mockNotionClient as any,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  mockNotionMarkdownConverter as any,
  "mock-database-id",
);

describe("BlogRepository", () => {
  describe("findAllBlogs", () => {
    it("Notionのレスポンスをもとに、BlogSummary[]として返す", async () => {
      const result = await testRepository.findAllBlogs();

      expect(result).toMatchObject([
        {
          id: "59833787-2cf9-4fdf-8782-e53db20768a5",
          title: "テストタイトル",
          tags: [
            { id: "tag1", name: "テストタグ1" },
            { id: "tag2", name: "テストタグ2" },
          ],
          createdAt: "2022-03-01T19:05:00.000Z",
          updatedAt: "2022-07-06T20:25:00.000Z",
        },
      ]);
      expect(result[0]).toBeInstanceOf(BlogSummary);
    });
  });

  describe("findBlogById", () => {
    it("Notionのレスポンスをもとに、BlogDetailとして返す", async () => {
      const result = await testRepository.findBlogById("mock-id");

      expect(result).toMatchObject({
        id: "59833787-2cf9-4fdf-8782-e53db20768a5",
        title: "テストタイトル",
        tags: [
          { id: "tag1", name: "テストタグ1" },
          { id: "tag2", name: "テストタグ2" },
        ],
        createdAt: "2022-03-01T19:05:00.000Z",
        updatedAt: "2022-07-06T20:25:00.000Z",
        content: "# テスト本文",
      });
      expect(result).toBeInstanceOf(BlogDetail);
    });
  });
});
