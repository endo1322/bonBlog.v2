import { BlogCard } from "@/features/blogs/components";
import { mockBlogsResponseData } from "@/mocks/data/blogs";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features/Blogs/UI/BlogCard",
  component: BlogCard,
  argTypes: {
    title: {
      control: { type: "text" },
      description: "The title of the blog",
      table: {
        type: { summary: "string" },
      },
    },
    createdAt: {
      control: { type: "date" },
      description: "The creation date of the blog",
      table: {
        type: { summary: "string" },
      },
    },
    tags: {
      control: { type: "object" },
      description: "The tags associated with the blog",
      table: {
        type: { summary: "Tags" },
      },
    },
  },
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: (({ id, updatedAt, ...rest }) => rest)(mockBlogsResponseData[0]),
};
