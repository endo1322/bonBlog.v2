import { PageLayout } from "@/components/layouts";
import { BlogListContent } from "@/features/blogs/components/BlogListContent";
import { BlogListSkeleton } from "@/features/blogs/components/BlogListSkeleton";
import { Suspense } from "react";

const BlogsPage = () => {
  return (
    <PageLayout title={"Blog"}>
      <Suspense fallback={<BlogListSkeleton />}>
        <BlogListContent />
      </Suspense>
    </PageLayout>
  );
};

export default BlogsPage;
