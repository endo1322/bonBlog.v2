import Timestamp from "@/features/blogs/components/Timestamp";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features/Blogs/UI/Timestamp",
  component: Timestamp,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    dateTime: {
      control: {
        type: "date",
      },
      description: "The date and time for the timestamp",
    },
  },
} satisfies Meta<typeof Timestamp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dateTime: "2025-03-22T12:00:00Z",
  },
};
