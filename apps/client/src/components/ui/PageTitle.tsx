import { cn } from "@bonblogv2/ui/lib/utils";
import { Link } from "react-router";

type Props = {
  className?: string;
  title: string;
  href?: string;
};

export const PageTitle = ({ className, title, href }: Props) => {
  return (
    <div className={cn(className)}>
      <h1 className="font-bold text-6xl text-gray-900">
        {href ? (
          <Link to={href} className="hover:text-blue-600">
            {title}
          </Link>
        ) : (
          title
        )}
      </h1>
      <div className="h-1 w-20 bg-blue-400" />
    </div>
  );
};
