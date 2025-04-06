import Tag from "@/features/blogs/components/Tag";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features/Blogs/UI/Tag",
  component: Tag,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
      description: "The label for the tag",
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "React",
  },
};
