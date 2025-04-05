import rpcClient, { type BlogsResponseType } from "@/apis";
import { PageLayout } from "@/components/layouts";
import { BlogCardList } from "@/features/blogs/components/BlogCardList";
import { useEffect, useState } from "react";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<BlogsResponseType>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await rpcClient.blogs.$get();
      if (res.ok) {
        const data = await res.json();
        setBlogs(data);
      }
    };

    fetchData();
  }, []);

  return (
    <PageLayout title={"Blog"}>
      <BlogCardList blogs={blogs} />
    </PageLayout>
  );
};

export default BlogsPage;
