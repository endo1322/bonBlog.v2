import { PATH } from "@/constants/path";
import { BlogDetailContainer } from "@/features/blogs/components";
import blogsHandlers from "@/mocks/handlers/blogs";
import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters, withRouter } from "storybook-addon-remix-react-router";

const meta = {
  title: "Features/Blogs/UI/BlogDetailContainer",
  component: BlogDetailContainer,
  parameters: {
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
} satisfies Meta<typeof BlogDetailContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
