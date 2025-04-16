import { CircleAvatar } from "@/components/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "UI/Avatar",
  component: CircleAvatar,
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    src: {
      control: {
        type: "text",
      },
      description: "Avatar image source URL",
    },
    alt: {
      control: {
        type: "text",
      },
      description: "Avatar image alt text",
    },
  },
} satisfies Meta<typeof CircleAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "../src/assets/profile.svg",
    alt: "プロフィール画像",
  },
};
