import { BlogCard } from "@/features/blogs/components";
import { blogListQuery } from "@/features/blogs/queries/blogList";
import { useSuspenseQuery } from "@tanstack/react-query";

export const BlogListContent = () => {
  const { data: blogs } = useSuspenseQuery(blogListQuery());

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </div>
  );
};
