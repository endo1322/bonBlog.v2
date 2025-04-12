import BlogsPage from "@/features/blogs/pages/Blogs";
import type { Blogs } from "@/features/blogs/types/blog";
import { mockGetBlogs200ResponseData } from "@/mocks/data/blogs";
import { TestWrapper } from "@/tests/wrapper";
import { render, screen } from "@testing-library/react";

describe("BlogsPage", () => {
  describe("Success", () => {
    it("リクエストに成功した時、ブログ要素が表示される", async () => {
      render(<BlogsPage />, { wrapper: TestWrapper });

      await Promise.all(
        mockGetBlogs200ResponseData.map(async (blog: Blogs[number]) => {
          const blogTitleElement = await screen.findByText(blog.title);
          expect(blogTitleElement).toBeInTheDocument();
        }),
      );
    });
  });
});
