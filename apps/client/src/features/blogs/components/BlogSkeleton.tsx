import { Card } from "@/components/ui";
import { Skeleton } from "@bonblogv2/ui/components";
import { cn } from "@bonblogv2/ui/lib/utils";
import { Fragment } from "react/jsx-runtime";

type Props = {
  className?: string;
};

const TimestampSkeleton = ({ className }: Props) => {
  return <Skeleton className={cn("h-5 w-20", className)} />;
};

const BlogTitleSkeleton = ({ className }: Props) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Skeleton className="h-6" />
      <Skeleton className="h-6" />
    </div>
  );
};

const TagSkeleton = () => {
  return <Skeleton className="h-5 w-16 rounded-full" />;
};

const BlogCardSkeleton = () => {
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

const BlogContentTitlteSkeleton = ({ className }: Props) => {
  return <Skeleton className={cn("h-9", className)} />;
};

const BlogContentCardSkeleton = ({ className }: Props) => {
  return (
    <Card className={className} isPointer={false}>
      <header className="mb-10">
        <div className="mb-4 flex gap-4">
          <TimestampSkeleton />
          <TimestampSkeleton />
        </div>
        <BlogContentTitlteSkeleton className="mb-2" />
        <div className="flex flex-wrap gap-2">
          {[...Array(3)].map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <TagSkeleton key={index} />
          ))}
        </div>
      </header>
      <div className="flex flex-col">
        {[...Array(50)].map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <Skeleton key={index} className="mb-2 h-6" />
        ))}
      </div>
    </Card>
  );
};

const TableOfContentsCardSkeleton = ({ className }: Props) => {
  return (
    <Card className={cn("h-fit w-fit", className)} isPointer={false}>
      <div className="w-64">
        <Skeleton className="h-7 w-10" />
        <div>
          {[...Array(2)].map((_, index_i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <Fragment key={index_i}>
              <Skeleton className="mt-2 h-6 w-1/2" />
              {[...Array(3)].map((_, index_j) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <Skeleton key={index_j} className="mt-1 ml-2 h-5 w-4/5" />
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </Card>
  );
};

export const BlogListSkeleton = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(12)].map((_, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <BlogCardSkeleton key={index} />
      ))}
    </div>
  );
};

export const BlogDetailSkeleton = () => {
  return (
    <div className="flex gap-4">
      <BlogContentCardSkeleton className="w-full" />
      <TableOfContentsCardSkeleton className="sticky top-4 hidden lg:block" />
    </div>
  );
};
