import { Card } from "@/components/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "UI/Card",
  component: Card,
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>Card Content</div>,
  },
};
