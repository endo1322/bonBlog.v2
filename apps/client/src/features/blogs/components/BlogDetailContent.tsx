import { Card } from "@/components/ui";
import { Tag, Timestamp } from "@/features/blogs/components";
import { blogDetailQuery } from "@/features/blogs/queries/blogDetail";
import { useSuspenseQuery } from "@tanstack/react-query";
import Markdown from "react-markdown";
import { useParams } from "react-router";

export const BlogDetailContent = () => {
  const { id } = useParams();
  if (!id) return null;
  const { data: blog } = useSuspenseQuery(blogDetailQuery(id));

  return (
    <Card isPointer={false}>
      <div className="mb-4 flex gap-4">
        <Timestamp dateTime={blog.createdAt} />
        <Timestamp dateTime={blog.updatedAt} />
      </div>
      <h1 className="mb-2 font-bold text-3xl">{blog.title}</h1>
      <div className="mb-4 flex flex-wrap gap-2">
        {blog.tags.map((tag) => (
          <Tag key={tag.id} label={tag.name} />
        ))}
      </div>
      <Markdown>{blog.content}</Markdown>
    </Card>
  );
};
