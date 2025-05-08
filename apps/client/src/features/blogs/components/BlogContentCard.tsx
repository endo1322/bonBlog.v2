import { Card, MarkdownWrapper } from "@/components/ui";
import { Tag, Timestamp, VersionWarningDisplay } from "@/features/blogs/components";
import type { Tags } from "@/features/blogs/types/blog";

type Props = {
  className?: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
  tags: Tags;
  version: number;
};

export const BlogContentCard = ({
  className,
  createdAt,
  updatedAt,
  title,
  content,
  tags,
  version,
}: Props) => {
  return (
    <Card as={"article"} className={className} isPointer={false}>
      <header className="mb-10">
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
        {version === 1 && <VersionWarningDisplay />}
      </header>
      <div>
        <MarkdownWrapper markdown={content} />
      </div>
    </Card>
  );
};
