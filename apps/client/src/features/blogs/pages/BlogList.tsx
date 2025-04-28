import { PageLayout } from "@/components/layouts";
import { Meta } from "@/components/meta";
import { ErrorBoundaryWrapper } from "@/components/ui";
import { BlogListContainer, BlogListSkeleton } from "@/features/blogs/components";
import { Suspense } from "react";

const BlogListPageLayout = ({ children }: { children: React.ReactNode }) => {
  return <PageLayout title="Blog">{children}</PageLayout>;
};

const BlogListPage = () => {
  return (
    <>
      <Meta title={"ブログ一覧"} />
      <ErrorBoundaryWrapper
        Layout={BlogListPageLayout}
        errorDisplayMessage={
          "ブログの取得に失敗しました。\nしばらくしてからもう一度お試しください。"
        }
      >
        <Suspense fallback={<BlogListSkeleton />}>
          <BlogListContainer />
        </Suspense>
      </ErrorBoundaryWrapper>
    </>
  );
};

export default BlogListPage;
