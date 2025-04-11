import { cn } from "@bonblogv2/ui/lib/utils";

type Props = {
  className?: string;
  children?: React.ReactNode;
  isPointer?: boolean;
  as?: "div" | "article";
};

export const Card = ({ className, children, isPointer = true, as: CustomTag = "div" }: Props) => {
  const pointerClass = isPointer ? "hover:cursor-pointer hover:shadow-lg transition-shadow" : "";
  return (
    <CustomTag className={cn("rounded-lg bg-white p-6 shadow-md", className, pointerClass)}>
      {children}
    </CustomTag>
  );
};
