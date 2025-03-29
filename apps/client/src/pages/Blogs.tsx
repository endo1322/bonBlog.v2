import rpcClient, { type BlogsResponseType } from "@/apis";
import { PATH } from "@/constants/path";
import { buttonVariants } from "@bonblogv2/ui/components/button";
import { useEffect, useState } from "react";
import { Link } from "react-router";

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
      <Link className={buttonVariants({ variant: "outline" })} to={PATH.HOME}>
        Back to Home
      </Link>
    </>
  );
};

export default Blogs;
