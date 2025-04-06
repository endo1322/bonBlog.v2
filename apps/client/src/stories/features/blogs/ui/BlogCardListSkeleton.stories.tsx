import { BlogCardListSkeleton } from "@/features/blogs/components/BlogCardListSkeleton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features/Blogs/UI/BlogCardListSkeleton",
  component: BlogCardListSkeleton,
} satisfies Meta<typeof BlogCardListSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
