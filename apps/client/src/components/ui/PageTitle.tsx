import { cn } from "@bonblogv2/ui/lib/utils";

type Props = {
  className?: string;
  title: string;
};

export const PageTitle = ({ className, title }: Props) => {
  return (
    <div className={cn(className)}>
      <h1 className="font-bold text-6xl text-gray-900">{title}</h1>
      <div className="h-1 w-20 bg-blue-400" />
    </div>
  );
};
