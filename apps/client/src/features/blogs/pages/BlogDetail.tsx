import { PageLayout } from "@/components/layouts";
import { ErrorBoundaryWrapper } from "@/components/ui";
import { BlogDetailContainer, BlogDetailSkeleton } from "@/features/blogs/components";
import { Suspense } from "react";

const BlogDetailPage = () => {
  return (
    <PageLayout title={"Blog"}>
      <ErrorBoundaryWrapper>
        <Suspense fallback={<BlogDetailSkeleton />}>
          <BlogDetailContainer />
        </Suspense>
      </ErrorBoundaryWrapper>
    </PageLayout>
  );
};

export default BlogDetailPage;
