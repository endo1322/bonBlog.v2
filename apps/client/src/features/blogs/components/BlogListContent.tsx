import { BlogCard } from "@/features/blogs/components";
import { blogListQuery } from "@/features/blogs/queries/blogList";
import { getBlogDetailPath } from "@/utils/path";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "react-router";

export const BlogListContent = () => {
  const { data: blogs } = useSuspenseQuery(blogListQuery());

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <Link key={blog.id} to={getBlogDetailPath(blog.id)}>
          <BlogCard key={blog.id} title={blog.title} createdAt={blog.createdAt} tags={blog.tags} />
        </Link>
      ))}
    </div>
  );
};
