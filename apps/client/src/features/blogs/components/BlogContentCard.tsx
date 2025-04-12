import { Card, MarkdownWrapper } from "@/components/ui";
import { Tag, Timestamp } from "@/features/blogs/components";
import type { Tags } from "@/features/blogs/types/blog";

type Props = {
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
  tags: Tags;
};

export const BlogContentCard = ({ createdAt, updatedAt, title, content, tags }: Props) => {
  return (
    <Card as={"article"} isPointer={false}>
      <header className=" mb-10">
        <div className="mb-4 flex gap-4">
          <Timestamp type={"created"} dateTime={createdAt} />
          <Timestamp type={"updated"} dateTime={updatedAt} />
        </div>
        <h1 className="mb-2 font-bold text-3xl">{title}</h1>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag.id} label={tag.name} />
          ))}
        </div>
      </header>
      <div>
        <MarkdownWrapper markdown={content} />
      </div>
    </Card>
  );
};
