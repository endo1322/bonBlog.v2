import { PageLayout } from "@/components/layouts";
import { ErrorBoundaryWrapper } from "@/components/ui";
import { PATH } from "@/constants/path";
import { helloQuery } from "@/queries";
import { buttonVariants } from "@bonblogv2/ui/components/";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { Link } from "react-router";

const HelloContent = () => {
  const { data: hello } = useSuspenseQuery(helloQuery());
  return <div>{hello.message}</div>;
};

function App() {
  return (
    <PageLayout title={"Home"}>
      <h1 className="font-bold text-3xl underline">Vite + React</h1>
      <div className="card">
        <ErrorBoundaryWrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <HelloContent />
          </Suspense>
        </ErrorBoundaryWrapper>
        <Link className={buttonVariants({ variant: "outline" })} to={PATH.BLOG_LIST}>
          View All Blogs
        </Link>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more!</p>
    </PageLayout>
  );
}

export default App;
