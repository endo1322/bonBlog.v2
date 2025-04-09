import { PageLayout } from "@/components/layouts";
import { Card } from "@/components/ui";
import { Tag, Timestamp } from "@/features/blogs/components";
import { blogDetailQuery } from "@/features/blogs/queries/blogDetail";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { useParams } from "react-router";

const BlogDetailContent = ({ id }: { id: string }) => {
  const { data: blog } = useSuspenseQuery(blogDetailQuery(id));

  return (
    <div className="flex gap-4">
      <Card className="flex-grow" isPointer={false}>
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
        {blog.content}
      </Card>
    </div>
  );
};

const BlogDetailPage = () => {
  const { id } = useParams();
  return (
    <PageLayout title={"Blog"}>
      <Suspense>{id && <BlogDetailContent id={id} />}</Suspense>
    </PageLayout>
  );
};

export default BlogDetailPage;
