import App from "@/App";
import { RootLayout } from "@/components/layouts";
import { PATH } from "@/constants/path";
import BlogDetailPage from "@/features/blogs/pages/BlogDetail";
import BlogsPage from "@/features/blogs/pages/Blogs";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { index: true, Component: App },
      { path: PATH.BLOGS, Component: BlogsPage },
      { path: PATH.BLOGS_ID, Component: BlogDetailPage },
    ],
  },
]);

export default router;
