import { PATH } from "@/constants/path";
import BlogDetailPage from "@/features/blogs/pages/BlogDetail";
import blogsHandlers from "@/mocks/handlers/blogs";
import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters, withRouter } from "storybook-addon-remix-react-router";

const meta = {
  title: "Features/Blogs/Pages/BlogDetailPage",
  component: BlogDetailPage,
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: blogsHandlers,
    },
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { id: "1" },
      },
      routing: { path: PATH.BLOG_DETAIL },
    }),
  },
  decorators: [withRouter],
} satisfies Meta<typeof BlogDetailPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
