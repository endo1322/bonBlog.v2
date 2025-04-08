import { PageLayout } from "@/components/layouts";
import { ErrorBoundaryWrapper } from "@/components/ui";
import { BlogListContent, BlogListSkeleton } from "@/features/blogs/components";
import { Suspense } from "react";

const BlogsPage = () => {
  return (
    <PageLayout title={"Blog"}>
      <ErrorBoundaryWrapper
        errorDisplayMessage={
          "ブログの取得に失敗しました。\nしばらくしてからもう一度お試しください。"
        }
      >
        <Suspense fallback={<BlogListSkeleton />}>
          <BlogListContent />
        </Suspense>
      </ErrorBoundaryWrapper>
    </PageLayout>
  );
};

export default BlogsPage;
