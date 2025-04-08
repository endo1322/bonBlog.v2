import { RootLayout } from "@/components/layouts";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
  title: "Layouts/RootLayout",
  component: RootLayout,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [withRouter],
} satisfies Meta<typeof RootLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
