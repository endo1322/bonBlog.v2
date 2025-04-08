import { PageTitle } from "@/components/ui";
import { PATH } from "@/constants/path";
import { buttonVariants } from "@bonblogv2/ui/components";
import { Link } from "react-router";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const PageLayout = ({ title, children }: Props) => {
  return (
    <div className="flex flex-col">
      <PageTitle className={"my-8"} title={title} />
      <div>{children}</div>
      <div className="mt-8 mb-4 flex justify-center">
        <Link className={buttonVariants({ variant: "outline" })} to={PATH.HOME}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};
