import BlogListPage from "@/features/blogs/pages/BlogList";
import blogsHandlers from "@/mocks/handlers/blogs";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
  title: "Features/Blogs/Pages/BlogListPage",
  component: BlogListPage,
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: blogsHandlers,
    },
  },
  decorators: [withRouter],
} satisfies Meta<typeof BlogListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
