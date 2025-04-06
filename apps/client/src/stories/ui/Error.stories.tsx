import { ErrorDisplay } from "@/components/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "UI/ErrorDisplay",
  component: ErrorDisplay,
  argTypes: {
    message: {
      control: {
        type: "text",
      },
      description: "Error message to display",
    },
  },
} satisfies Meta<typeof ErrorDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "エラーが発生しました。しばらくしてからもう一度お試しください。",
  },
};
