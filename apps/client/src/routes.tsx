import App from "@/App";
import { RootLayout } from "@/components/layouts";
import { PATH } from "@/constants/path";
import BlogsPage from "@/features/blogs/pages/Blogs";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { index: true, Component: App },
      { path: PATH.BLOGS, Component: BlogsPage },
    ],
  },
]);

export default router;
