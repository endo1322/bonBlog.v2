import App from "@/App";
import { RootLayout } from "@/components/layouts";
import { PATH } from "@/constants/path";
import BlogDetailPage from "@/features/blogs/pages/BlogDetail";
import BlogListPage from "@/features/blogs/pages/BlogList";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { index: true, Component: App },
      { path: PATH.BLOG_LIST, Component: BlogListPage },
      { path: PATH.BLOG_DETAIL, Component: BlogDetailPage },
    ],
  },
]);

export default router;
