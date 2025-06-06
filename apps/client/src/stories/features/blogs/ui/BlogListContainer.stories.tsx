import { BlogListContainer } from "@/features/blogs/components";
import blogsHandlers from "@/mocks/handlers/blogs";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
  title: "Features/Blogs/UI/BlogListContainer",
  component: BlogListContainer,
  parameters: {
    msw: {
      handlers: blogsHandlers,
    },
  },
  decorators: [withRouter],
} satisfies Meta<typeof BlogListContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
