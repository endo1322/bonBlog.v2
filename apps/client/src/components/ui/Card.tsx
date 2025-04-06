import { cn } from "@bonblogv2/ui/lib/utils";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Card = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow hover:cursor-pointer",
        className,
      )}
    >
      {children}
    </div>
  );
};
