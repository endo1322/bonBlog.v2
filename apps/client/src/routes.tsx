import App from "@/App";
import { PATH } from "@/constants/path";
import Blogs from "@/pages/Blogs";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: App },
      { path: PATH.BLOGS, Component: Blogs },
    ],
  },
]);

export default router;
