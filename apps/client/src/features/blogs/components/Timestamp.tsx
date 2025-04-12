import { Calendar, RefreshCw } from "@bonblogv2/ui/icons";
import { cn } from "@bonblogv2/ui/lib/utils";

type Props = {
  className?: string;
  dateTime: string;
  type?: "created" | "updated";
};

export const Timestamp = ({ className, dateTime, type = "created" }: Props) => {
  return (
    <div className={cn("flex items-center text-gray-500 text-sm", className)}>
      {type === "created" ? (
        <Calendar size={16} className="mr-1" />
      ) : (
        <RefreshCw size={16} className="mr-1" />
      )}
      <time dateTime={dateTime}>{new Date(dateTime).toLocaleDateString("ja-JP")}</time>
    </div>
  );
};
