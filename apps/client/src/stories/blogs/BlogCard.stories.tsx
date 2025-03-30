import BlogCard from "@/features/blogs/components/BlogCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features/Blogs/BlogCard",
  component: BlogCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    blog: {
      control: { type: "object" },
      description: "The blog data",
      table: {
        type: { summary: "Blog" },
      },
    },
  },
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    blog: {
      id: "1",
      title: "Getting Started with React and TypeScript a",
      createdAt: "2025-03-22T12:00:00Z",
      updatedAt: "2025-03-22T12:00:00Z",
      tags: [
        {
          id: "1",
          name: "React",
        },
        {
          id: "2",
          name: "TypeScript",
        },
        {
          id: "3",
          name: "Frontend",
        },
      ],
    },
  },
};
