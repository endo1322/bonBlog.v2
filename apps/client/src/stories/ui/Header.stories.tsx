import { Header } from "@/components/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
  title: "UI/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [withRouter],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
