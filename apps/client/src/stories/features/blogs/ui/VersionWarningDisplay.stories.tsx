import { VersionWarningDisplay } from "@/features/blogs/components";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
  title: "Features/Blogs/UI/VersionWarningDisplay",
  component: VersionWarningDisplay,
  decorators: [withRouter],
} satisfies Meta<typeof VersionWarningDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
