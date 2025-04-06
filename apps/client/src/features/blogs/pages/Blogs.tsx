import { PageLayout } from "@/components/layouts";
import { BlogCardListSkeleton } from "@/features/blogs/components/BlogCardListSkeleton";
import { BlogListContent } from "@/features/blogs/components/BlogListContent";
import { Suspense } from "react";

const BlogsPage = () => {
  return (
    <PageLayout title={"Blog"}>
      <Suspense fallback={<BlogCardListSkeleton />}>
        <BlogListContent />
      </Suspense>
    </PageLayout>
  );
};

export default BlogsPage;
