import { Calendar } from "lucide-react";

interface Props {
  dateTime: string;
}

export const Timestamp: React.FC<Props> = ({ dateTime }) => {
  return (
    <div className="flex items-center text-gray-500 text-sm mb-2">
      <Calendar size={16} className="mr-1" />
      <time dateTime={dateTime}>{new Date(dateTime).toLocaleDateString("ja-JP")}</time>
    </div>
  );
};

export default Timestamp;
