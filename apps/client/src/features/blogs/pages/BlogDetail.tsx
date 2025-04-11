import { PageLayout } from "@/components/layouts";
import { Card } from "@/components/ui";
import { Tag, Timestamp } from "@/features/blogs/components";
import { blogDetailQuery } from "@/features/blogs/queries/blogDetail";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { useParams } from "react-router";

const BlogDetailContent = () => {
  const { id } = useParams();
  if (!id) return null;
  const { data: blog } = useSuspenseQuery(blogDetailQuery(id));

  return (
    <Card>
      <div className="flex gap-2">
        <Timestamp dateTime={blog.createdAt} />
        <Timestamp dateTime={blog.updatedAt} />
      </div>
      <h1>{blog.title}</h1>
      <div className="flex flex-wrap gap-2">
        {blog.tags.map((tag) => (
          <Tag key={tag.id} label={tag.name} />
        ))}
      </div>
      <div>{blog.content}</div>
    </Card>
  );
};

const BlogDetailPage = () => {
  return (
    <PageLayout title={"Blog"}>
      <Suspense fallback={<div>Loading...</div>}>
        <BlogDetailContent />
      </Suspense>
    </PageLayout>
  );
};

export default BlogDetailPage;
