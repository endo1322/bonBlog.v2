import { Calendar } from "@bonblogv2/ui/icons";
import { cn } from "@bonblogv2/ui/lib/utils";

type Props = {
  className?: string;
  dateTime: string;
};

export const Timestamp: React.FC<Props> = ({ className, dateTime }) => {
  return (
    <div className={cn("flex items-center text-gray-500 text-sm", className)}>
      <Calendar size={16} className="mr-1" />
      <time dateTime={dateTime}>{new Date(dateTime).toLocaleDateString("ja-JP")}</time>
    </div>
  );
};

export default Timestamp;
