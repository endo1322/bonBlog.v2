import { AlertTriangle } from "lucide-react";
import { ErrorBoundary } from "react-error-boundary";

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  errorDisplayMessage?: string;
};

export const ErrorDisplay = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col items-center rounded-lg bg-red-50 p-6">
      <AlertTriangle className="h-12 w-12 text-red-500 mb-4" />
      <p className="text-red-700 font-medium">{message}</p>
    </div>
  );
};

export const ErrorBoundaryWrapper = ({
  children,
  fallback,
  errorDisplayMessage = "エラーが発生しました。しばらくしてからもう一度お試しください。",
}: Props) => {
  const FallbackComponent = fallback || <ErrorDisplay message={errorDisplayMessage} />;
  return <ErrorBoundary fallback={FallbackComponent}>{children}</ErrorBoundary>;
};
