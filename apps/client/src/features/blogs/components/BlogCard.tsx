import { Card } from "@/components/ui";
import { Tag } from "@/features/blogs/components/Tag";
import Timestamp from "@/features/blogs/components/Timestamp";
import type { Tags } from "@/features/blogs/types/blog";

type Props = {
  title: string;
  createdAt: string;
  tags: Tags;
};

export const BlogCard: React.FC<Props> = ({ title, createdAt, tags }) => {
  return (
    <Card>
      <Timestamp dateTime={createdAt} />
      <h2 className="mb-4 line-clamp-2 font-semibold text-gray-900 text-xl">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag.id} label={tag.name} />
        ))}
      </div>
    </Card>
  );
};

export default BlogCard;
