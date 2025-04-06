import BlogCard from "@/features/blogs/components/BlogCard";
import { useSuspenseQuery } from "@tanstack/react-query";
import { blogListQuery } from "../queries/blogList";

export const BlogListContent: React.FC = () => {
  const { data: blogs } = useSuspenseQuery(blogListQuery());

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogListContent;
