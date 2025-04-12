import { TableOfContentsCard } from "@/features/blogs/components";
import { mockGetBlog200ResponseData } from "@/mocks/data/blogs";
import { extractHeadings } from "@/utils/markdown";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features/Blogs/UI/TableOfContentsCard",
  component: TableOfContentsCard,
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    headings: {
      control: { type: "object" },
      description: "The headings of the blog content",
      table: {
        type: { summary: "Headings" },
      },
    },
  },
} satisfies Meta<typeof TableOfContentsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headings: extractHeadings(mockGetBlog200ResponseData.content),
  },
};
