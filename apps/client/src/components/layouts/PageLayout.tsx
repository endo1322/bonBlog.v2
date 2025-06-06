import { PageTitle } from "@/components/ui";
import { buttonVariants } from "@bonblogv2/ui/components";
import { Link } from "react-router";

type Props = {
  title: string;
  titleLink?: string;
  children: React.ReactNode;
  toBackPath?: string;
  backButtonLabel?: string;
};

export const PageLayout = ({
  title,
  titleLink,
  children,
  toBackPath,
  backButtonLabel = "戻る",
}: Props) => {
  return (
    <div className="flex flex-col">
      <PageTitle className={"my-8"} title={title} href={titleLink} />
      <div>{children}</div>
      <div className="mt-8 mb-4 flex justify-center">
        {toBackPath && (
          <Link className={buttonVariants({ variant: "outline" })} to={toBackPath}>
            {backButtonLabel}
          </Link>
        )}
      </div>
    </div>
  );
};
