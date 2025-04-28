import { Meta } from "@/components/meta";
import { BlogContentCard, TableOfContentsCard } from "@/features/blogs/components";
import { blogDetailQuery } from "@/features/blogs/queries/blogDetail";
import { extractHeadings } from "@/utils/markdown";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export const BlogDetailContainer = () => {
  const { id } = useParams();
  if (!id) return null;
  const { data: blog } = useSuspenseQuery(blogDetailQuery(id));

  return (
    <div className="flex gap-4">
      <Meta
        title={blog.title}
        auther="bondroid1322"
        keywords={blog.tags.map((tag) => tag.name).join(", ")}
      />
      <BlogContentCard
        className="w-full"
        createdAt={blog.createdAt}
        updatedAt={blog.updatedAt}
        title={blog.title}
        content={blog.content}
        tags={blog.tags}
        version={blog.version}
      />
      <TableOfContentsCard
        className="sticky top-4 hidden lg:block"
        headings={extractHeadings(blog.content)}
      />
    </div>
  );
};
