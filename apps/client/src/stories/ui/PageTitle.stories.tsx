import { PageTitle } from "@/components/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "UI/PageTitle",
  component: PageTitle,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: { type: "text" },
      description: "The title of the page",
      table: {
        type: { summary: "string" },
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Page",
  },
};
