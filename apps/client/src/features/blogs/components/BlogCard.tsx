import { Tag } from "@/features/blogs/components/Tag";
import type { Blogs } from "@/features/blogs/types/blog";
import { Timestamp } from "./Timestamp";

interface Props {
  blog: Blogs[number];
}

export const BlogCard: React.FC<Props> = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow hover:cursor-pointer">
      <Timestamp dateTime={blog.createdAt} />
      <h2 className="text-xl font-semibold text-gray-900 mb-4 line-clamp-2">{blog.title}</h2>
      <div className="flex flex-wrap gap-2">
        {blog.tags.map((tag) => (
          <Tag key={tag.id} label={tag.name} />
        ))}
      </div>
    </div>
  );
};
