import { PageTitle } from "@/components/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
  title: "UI/PageTitle",
  component: PageTitle,
  argTypes: {
    title: {
      control: { type: "text" },
      description: "The title of the page",
      table: {
        type: { summary: "string" },
      },
    },
    href: {
      control: { type: "text" },
      description: "The link to the page",
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
  decorators: [withRouter],
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Page",
  },
};

export const WithLink: Story = {
  args: {
    title: "Page",
    href: "/",
  },
};
