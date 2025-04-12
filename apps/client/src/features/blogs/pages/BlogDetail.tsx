import { PageLayout } from "@/components/layouts";
import { ErrorBoundaryWrapper } from "@/components/ui";
import { BlogDetailContainer } from "@/features/blogs/components";
import { Suspense } from "react";

const BlogDetailPage = () => {
  return (
    <PageLayout title={"Blog"}>
      <ErrorBoundaryWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <BlogDetailContainer />
        </Suspense>
      </ErrorBoundaryWrapper>
    </PageLayout>
  );
};

export default BlogDetailPage;
