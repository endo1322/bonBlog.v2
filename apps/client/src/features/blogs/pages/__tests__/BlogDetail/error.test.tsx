import BlogDetailPage from "@/features/blogs/pages/BlogDetail";
import { mockGetBlog500ErrorHandler } from "@/mocks/handlers/blogs";
import server from "@/mocks/server";
import TestWrapper from "@/tests/wrapper";
import { render, screen } from "@testing-library/react";

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useParams: vi.fn(() => ({ id: "1" })),
  };
});

describe("BlogDetailPage", () => {
  describe("Error", () => {
    it("リクエストに失敗した時、エラーメッセージが表示される", async () => {
      server.use(mockGetBlog500ErrorHandler);
      render(<BlogDetailPage />, { wrapper: TestWrapper });

      const errorMessage = await screen.findByText(/ブログの取得に失敗しました。/);
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
