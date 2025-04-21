import BlogDetailPage from "@/features/blogs/pages/BlogDetail";
import { mockGetBlog404ErrorHandler } from "@/mocks/handlers/blogs";
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
    it("存在しないブログにアクセスした時、404ページが表示される", async () => {
      server.use(mockGetBlog404ErrorHandler);
      render(<BlogDetailPage />, { wrapper: TestWrapper });

      const errorMessage = await screen.findByText(/お探しのページは見つかりませんでした。/);
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
