import { HttpError } from "@/apis/HttpError";
import { AlertTriangle } from "@bonblogv2/ui/icons";
import { ErrorBoundary } from "react-error-boundary";
import { NotFoundPage } from "../pages/NotFound";

type Props = {
  children: React.ReactNode;
  Layout?: React.ComponentType<{ children: React.ReactNode }>;
  errorDisplayMessage?: string;
};

export const ErrorDisplay = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col items-center rounded-lg bg-red-50 p-6">
      <AlertTriangle className="mb-4 h-12 w-12 text-red-500" />
      <p className="whitespace-pre-line text-center font-medium text-red-700">{message}</p>
    </div>
  );
};

export const ErrorBoundaryWrapper = ({
  children,
  Layout = () => <>{children}</>,
  errorDisplayMessage = "エラーが発生しました。\nしばらくしてからもう一度お試しください。",
}: Props) => {
  return (
    <ErrorBoundary
      fallbackRender={({ error }) => {
        if (error instanceof HttpError && error.status === 404) {
          return <NotFoundPage />;
        }
        return (
          <Layout>
            <ErrorDisplay message={errorDisplayMessage} />
          </Layout>
        );
      }}
    >
      <Layout>{children}</Layout>
    </ErrorBoundary>
  );
};
