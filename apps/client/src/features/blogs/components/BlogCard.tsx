import { Card } from "@/components/ui";
import { Tag } from "@/features/blogs/components/Tag";
import Timestamp from "@/features/blogs/components/Timestamp";
import type { Blogs } from "@/features/blogs/types/blog";

interface Props {
  blog: Blogs[number];
}

export const BlogCard: React.FC<Props> = ({ blog }) => {
  return (
    <Card>
      <Timestamp dateTime={blog.createdAt} />
      <h2 className="mb-4 line-clamp-2 font-semibold text-gray-900 text-xl">{blog.title}</h2>
      <div className="flex flex-wrap gap-2">
        {blog.tags.map((tag) => (
          <Tag key={tag.id} label={tag.name} />
        ))}
      </div>
    </Card>
  );
};

export default BlogCard;
