import App from "@/App";
import { PageLayout, RootLayout } from "@/components/layouts";
import { PATH } from "@/constants/path";
import Blogs from "@/features/blogs/pages/Blogs";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        index: true,
        element: (
          <PageLayout title={"Home"}>
            <App />
          </PageLayout>
        ),
      },
      {
        path: PATH.BLOGS,
        element: (
          <PageLayout title={"Blog"}>
            <Blogs />
          </PageLayout>
        ),
      },
    ],
  },
]);

export default router;
