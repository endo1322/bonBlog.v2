import { PageLayout } from "@/components/layouts";
import { ErrorBoundaryWrapper } from "@/components/ui";
import { PATH } from "@/constants/path";
import { BlogDetailContainer, BlogDetailSkeleton } from "@/features/blogs/components";
import { Suspense } from "react";

const BlogDetailPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageLayout title="Blog" titleLink={PATH.BLOG_LIST}>
      {children}
    </PageLayout>
  );
};

const BlogDetailPage = () => {
  return (
    <ErrorBoundaryWrapper
      Layout={BlogDetailPageLayout}
      errorDisplayMessage={"ブログの取得に失敗しました。\nしばらくしてからもう一度お試しください。"}
    >
      <Suspense fallback={<BlogDetailSkeleton />}>
        <BlogDetailContainer />
      </Suspense>
    </ErrorBoundaryWrapper>
  );
};

export default BlogDetailPage;
