import { HttpError } from "@/apis/HttpError";
import { NotFoundPage } from "@/components/pages/NotFound";
import { Button } from "@bonblogv2/ui/components";
import { AlertTriangle } from "@bonblogv2/ui/icons";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

type Props = {
  children: React.ReactNode;
  Layout?: React.ComponentType<{ children: React.ReactNode }>;
  errorDisplayMessage?: string;
};

export const ErrorDisplay = ({ message, onClick }: { message: string; onClick: () => void }) => {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg bg-red-50 p-6">
      <AlertTriangle className="h-12 w-12 text-red-500" />
      <p className="whitespace-pre-line text-center font-medium text-red-700">{message}</p>
      <Button className="w-fit hover:cursor-pointer" variant={"destructive"} onClick={onClick}>
        再読み込み
      </Button>
    </div>
  );
};
export const ErrorBoundaryWrapper = ({
  children,
  Layout = () => <>{children}</>,
  errorDisplayMessage = "エラーが発生しました。\nしばらくしてからもう一度お試しください。",
}: Props) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ error, resetErrorBoundary }) => {
            if (error instanceof HttpError && error.status === 404) {
              return <NotFoundPage />;
            }
            return (
              <Layout>
                <ErrorDisplay message={errorDisplayMessage} onClick={resetErrorBoundary} />
              </Layout>
            );
          }}
        >
          <Layout>{children}</Layout>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};
