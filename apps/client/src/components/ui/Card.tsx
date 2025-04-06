import { cn } from "@bonblogv2/ui/lib/utils";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Card = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        "rounded-lg bg-white p-6 shadow-md transition-shadow hover:cursor-pointer hover:shadow-lg",
        className,
      )}
    >
      {children}
    </div>
  );
};
