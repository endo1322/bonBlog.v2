import BlogCardList from "@/features/blogs/components/BlogCardList";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features/Blogs/BlogCardList",
  component: BlogCardList,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    blogs: {
      control: { type: "object" },
      description: "The list of blogs",
      table: {
        type: { summary: "Blog[]" },
      },
    },
  },
} satisfies Meta<typeof BlogCardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    blogs: [
      {
        id: "1",
        title: "Getting Started with React and TypeScript",
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
      {
        id: "2",
        title: "Getting Started with Next.js and Tailwind CSS",
        createdAt: "2025-03-22T12:00:00Z",
        updatedAt: "2025-03-22T12:00:00Z",
        tags: [
          {
            id: "4",
            name: "Next.js",
          },
          {
            id: "5",
            name: "Tailwind CSS",
          },
          {
            id: "3",
            name: "Frontend",
          },
        ],
      },
      {
        id: "3",
        title: "Getting Started with GraphQL and Apollo Client",
        createdAt: "2025-03-22T12:00:00Z",
        updatedAt: "2025-03-22T12:00:00Z",
        tags: [
          {
            id: "7",
            name: "GraphQL",
          },
          {
            id: "8",
            name: "Apollo Client",
          },
          {
            id: "3",
            name: "Frontend",
          },
        ],
      },
      {
        id: "4",
        title: "Getting Started with Node.js and Express",
        createdAt: "2025-03-22T12:00:00Z",
        updatedAt: "2025-03-22T12:00:00Z",
        tags: [
          {
            id: "9",
            name: "Node.js",
          },
          {
            id: "10",
            name: "Express",
          },
          {
            id: "11",
            name: "Backend",
          },
        ],
      },
    ],
  },
};
