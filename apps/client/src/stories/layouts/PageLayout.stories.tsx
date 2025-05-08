import { PageLayout } from "@/components/layouts";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
  title: "Layouts/PageLayout",
  component: PageLayout,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    title: {
      control: { type: "text" },
      description: "The title of the page",
      table: {
        type: { summary: "string" },
      },
    },
    titleLink: {
      control: { type: "text" },
      description: "The link to the page",
      table: {
        type: { summary: "string" },
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    toBackPath: {
      control: { type: "text" },
      description: "The link to the back page",
      table: {
        type: { summary: "string" },
      },
    },
    backButtonLabel: {
      control: { type: "text" },
      description: "The label of the back button",
      table: {
        type: { summary: "string" },
      },
    },
  },
  decorators: [withRouter],
} satisfies Meta<typeof PageLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Page",
    children: <div>Page Content</div>,
  },
};

export const WithLink: Story = {
  args: {
    title: "Page",
    titleLink: "/",
    children: <div>Page Content</div>,
  },
};

export const WithBackButton: Story = {
  args: {
    title: "Page",
    toBackPath: "/",
    children: <div>Page Content</div>,
  },
};
