import BlogsPage from "@/features/blogs/pages/Blogs";
import blogsHandlers from "@/mocks/handlers/blogs";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
  title: "Features/Blogs/Pages/BlogsPage",
  component: BlogsPage,
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: blogsHandlers,
    },
  },
  decorators: [withRouter],
} satisfies Meta<typeof BlogsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
