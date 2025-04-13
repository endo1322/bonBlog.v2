import BlogListPage from "@/features/blogs/pages/BlogList";
import { mockGetBlogs500ErrorHandler } from "@/mocks/handlers/blogs";
import server from "@/mocks/server";
import TestWrapper from "@/tests/wrapper";
import { render, screen } from "@testing-library/react";

describe("BlogListPage", () => {
  describe("Error", () => {
    it("リクエストに失敗した時、エラーメッセージが表示される", async () => {
      server.use(mockGetBlogs500ErrorHandler);
      render(<BlogListPage />, { wrapper: TestWrapper });

      const errorMessage = await screen.findByText(/ブログの取得に失敗しました。/);
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
