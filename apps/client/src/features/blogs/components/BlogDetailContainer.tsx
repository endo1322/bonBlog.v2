import { Card, MarkdownWrapper } from "@/components/ui";
import { Tag, Timestamp } from "@/features/blogs/components";
import { blogDetailQuery } from "@/features/blogs/queries/blogDetail";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export const BlogDetailContainer = () => {
  const { id } = useParams();
  if (!id) return null;
  const { data: blog } = useSuspenseQuery(blogDetailQuery(id));

  return (
    <Card as={"article"} isPointer={false}>
      <header className=" mb-10">
        <div className="mb-4 flex gap-4">
          <Timestamp type={"created"} dateTime={blog.createdAt} />
          <Timestamp type={"updated"} dateTime={blog.updatedAt} />
        </div>
        <h1 className="mb-2 font-bold text-3xl">{blog.title}</h1>
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <Tag key={tag.id} label={tag.name} />
          ))}
        </div>
      </header>
      <div>
        <MarkdownWrapper markdown={blog.content} />
      </div>
    </Card>
  );
};
