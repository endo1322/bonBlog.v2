import { PageLayout } from "@/components/layouts";
import { ErrorBoundaryWrapper } from "@/components/ui/Error";
import { BlogListContent } from "@/features/blogs/components/BlogListContent";
import { BlogListSkeleton } from "@/features/blogs/components/BlogListSkeleton";
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
