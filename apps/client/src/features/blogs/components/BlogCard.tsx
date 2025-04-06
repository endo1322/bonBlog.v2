import { Card } from "@/components/ui";
import { Tag, Timestamp } from "@/features/blogs/components";
import type { Tags } from "@/features/blogs/types/blog";

type Props = {
  title: string;
  createdAt: string;
  tags: Tags;
};

export const BlogCard = ({ title, createdAt, tags }: Props) => {
  return (
    <Card>
      <Timestamp className={"mb-2"} dateTime={createdAt} />
      <h2 className="mb-4 line-clamp-2 font-semibold text-gray-900 text-xl">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag.id} label={tag.name} />
        ))}
      </div>
    </Card>
  );
};
