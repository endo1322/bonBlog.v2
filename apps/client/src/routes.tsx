import { RootLayout } from "@/components/layouts";
import { NotFoundPage } from "@/components/pages/NotFound";
import { PATH } from "@/constants/path";
import BlogDetailPage from "@/features/blogs/pages/BlogDetail";
import BlogListPage from "@/features/blogs/pages/BlogList";
import { Navigate, createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { index: true, element: <Navigate to={PATH.BLOG_LIST} replace /> },
      { path: PATH.BLOG_LIST, Component: BlogListPage },
      { path: PATH.BLOG_DETAIL, Component: BlogDetailPage },
      { path: PATH.NOT_FOUND, Component: NotFoundPage },
    ],
  },
]);

export default router;
