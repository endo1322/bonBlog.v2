import { cn } from "@bonblogv2/ui/lib/utils";

type Props = {
  className?: string;
  children?: React.ReactNode;
  isPointer?: boolean;
};

export const Card = ({ className, children, isPointer = true }: Props) => {
  const pointerClass = isPointer ? "hover:cursor-pointer hover:shadow-lg transition-shadow" : "";
  return (
    <div className={cn("rounded-lg bg-white p-6 shadow-md", className, pointerClass)}>
      {children}
    </div>
  );
};
