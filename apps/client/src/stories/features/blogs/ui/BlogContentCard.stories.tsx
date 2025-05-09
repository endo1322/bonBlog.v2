import { BlogContentCard } from "@/features/blogs/components";
import { mockGetBlog200ResponseData } from "@/mocks/data/blogs";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
  title: "Features/Blogs/UI/BlogContentCard",
  component: BlogContentCard,
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    title: {
      control: { type: "text" },
      description: "The title of the blog",
      table: {
        type: { summary: "string" },
      },
    },
    createdAt: {
      control: { type: "date" },
      description: "The creation date of the blog",
      table: {
        type: { summary: "string" },
      },
    },
    updatedAt: {
      control: { type: "date" },
      description: "The last updated date of the blog",
      table: {
        type: { summary: "string" },
      },
    },
    tags: {
      control: { type: "object" },
      description: "The tags associated with the blog",
      table: {
        type: { summary: "Tags" },
      },
    },
    content: {
      control: { type: "text" },
      description: "The content of the blog",
      table: {
        type: { summary: "string" },
      },
    },
    version: {
      control: { type: "number" },
      description: "The version of the blog site",
      table: {
        type: { summary: "number" },
      },
    },
  },
  decorators: [withRouter],
} satisfies Meta<typeof BlogContentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: (({ id, ...rest }) => rest)(mockGetBlog200ResponseData),
};

export const Version1: Story = {
  args: (({ id, version, ...rest }) => ({
    ...rest,
    version: 1,
  }))(mockGetBlog200ResponseData),
};
