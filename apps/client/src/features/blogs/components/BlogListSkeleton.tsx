import { Card } from "@/components/ui";
import { Skeleton } from "@bonblogv2/ui/components";
import { cn } from "@bonblogv2/ui/lib/utils";

type Props = {
  className?: string;
};

const TimestampSkeleton: React.FC<Props> = ({ className }) => {
  return <Skeleton className={cn("h-5 w-20", className)} />;
};

const BlogTitleSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Skeleton className="h-6" />
      <Skeleton className="h-6" />
    </div>
  );
};

const TagSkeleton: React.FC = () => {
  return <Skeleton className="h-5 w-16 rounded-full" />;
};

const BlogCardSkeleton: React.FC = () => {
  return (
    <Card>
      <TimestampSkeleton className="mb-2" />
      <BlogTitleSkeleton className="mb-4" />
      <div className="flex flex-wrap gap-2">
        {[...Array(3)].map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <TagSkeleton key={index} />
        ))}
      </div>
    </Card>
  );
};

export const BlogListSkeleton: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(12)].map((_, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <BlogCardSkeleton key={index} />
      ))}
    </div>
  );
};
