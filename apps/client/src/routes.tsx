import App from "@/App";
import RootLayout from "@/components/layouts/RootLayout";
import { PATH } from "@/constants/path";
import Blogs from "@/pages/Blogs";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: App },
      { path: PATH.BLOGS, Component: Blogs },
    ],
  },
]);

export default router;
