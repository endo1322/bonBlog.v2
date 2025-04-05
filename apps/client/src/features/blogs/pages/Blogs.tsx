import rpcClient, { type BlogsResponseType } from "@/apis";
import { BlogCardList } from "@/features/blogs/components/BlogCardList";
import { useEffect, useState } from "react";

const Blogs = () => {
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

  return <BlogCardList blogs={blogs} />;
};

export default Blogs;
