import { BlogListSkeleton } from "@/features/blogs/components/BlogListSkeleton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features/Blogs/UI/BlogListSkeleton",
  component: BlogListSkeleton,
} satisfies Meta<typeof BlogListSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
