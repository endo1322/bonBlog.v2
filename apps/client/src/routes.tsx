import App from "@/App";
import { RootLayout } from "@/components/layouts";
import { PATH } from "@/constants/path";
import Blogs from "@/features/blogs/pages/Blogs";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { index: true, Component: App },
      { path: PATH.BLOGS, Component: Blogs },
    ],
  },
]);

export default router;
