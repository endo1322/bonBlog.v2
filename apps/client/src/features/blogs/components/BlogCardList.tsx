import BlogCard from "@/features/blogs/components/BlogCard";
import type { Blogs } from "@/features/blogs/types/blog";

export interface Props {
  blogs: Blogs;
}

export const BlogCardList: React.FC<Props> = ({ blogs }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogCardList;
