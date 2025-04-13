import { BlogDetailSkeleton } from "@/features/blogs/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features/Blogs/UI/BlogDetailSkeleton",
  component: BlogDetailSkeleton,
} satisfies Meta<typeof BlogDetailSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
