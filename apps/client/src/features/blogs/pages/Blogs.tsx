import rpcClient from "@/apis";
import { PageLayout } from "@/components/layouts";
import { BlogCardList } from "@/features/blogs/components/BlogCardList";
import { BlogCardListSkeleton } from "@/features/blogs/components/BlogCardListSkeleton";
import type { Blogs } from "@/features/blogs/types/blog";
import { Suspense, use, useState } from "react";

const Child: React.FC<{ blogsP: Promise<Blogs> }> = ({ blogsP }) => {
  const blogs = use(blogsP);
  return <BlogCardList blogs={blogs} />;
};

const BlogsPage = () => {
  const fetchData = async () => {
    const res = await rpcClient.blogs.$get();
    return await res.json();
  };

  const [blogs] = useState(() => fetchData());

  return (
    <PageLayout title={"Blog"}>
      <Suspense fallback={<BlogCardListSkeleton />}>
        <Child blogsP={blogs} />
      </Suspense>
    </PageLayout>
  );
};

export default BlogsPage;
