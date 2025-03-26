import rpcClient, { type BlogsResponseType } from "@/apis";
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

  return (
    <>
      <h1>Blogs Page</h1>
      <div>
        {blogs.map((blog) => (
          <div key={blog.id}>{blog.title}</div>
        ))}
      </div>
    </>
  );
};

export default Blogs;
