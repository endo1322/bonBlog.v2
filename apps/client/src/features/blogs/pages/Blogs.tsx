import { PageLayout } from "@/components/layouts";
import { BlogCardList } from "@/features/blogs/components/BlogCardList";
import { BlogCardListSkeleton } from "@/features/blogs/components/BlogCardListSkeleton";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { blogListQuery } from "../queries/blogList";

const Child: React.FC = () => {
  const { data: blogs } = useSuspenseQuery(blogListQuery());
  return <BlogCardList blogs={blogs} />;
};

const BlogsPage = () => {
  return (
    <PageLayout title={"Blog"}>
      <Suspense fallback={<BlogCardListSkeleton />}>
        <Child />
      </Suspense>
    </PageLayout>
  );
};

export default BlogsPage;
