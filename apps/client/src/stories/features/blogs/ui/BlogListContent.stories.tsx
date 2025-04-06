import BlogListContent from "@/features/blogs/components/BlogListContent";
import blogsHandlers from "@/mocks/handlers/blogs";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features/Blogs/UI/BlogListContent",
  component: BlogListContent,
  parameters: {
    msw: {
      handlers: blogsHandlers,
    },
  },
} satisfies Meta<typeof BlogListContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
