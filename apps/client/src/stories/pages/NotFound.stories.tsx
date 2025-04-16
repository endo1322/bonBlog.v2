import { NotFoundPage } from "@/components/pages/NotFound";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
  title: "Pages/NotFoundPage",
  component: NotFoundPage,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [withRouter],
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
