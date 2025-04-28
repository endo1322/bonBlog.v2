import oops from "@/assets/oops.svg";
import { CircleAvatar } from "@/components/ui";
import { PATH } from "@/constants/path";
import { buttonVariants } from "@bonblogv2/ui/components";
import { Link } from "react-router";

export const NotFoundPage = () => {
  return (
    <div className="flex h-[75vh] flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-20 lg:flex-row">
        <CircleAvatar src={oops} alt="不満げなプロフィール画像" />
        <div className="flex flex-col items-center justify-center lg:items-start">
          <h1 className="font-bold text-4xl">404 - Not Found</h1>
          <div className="mt-4 text-center text-lg lg:text-start">
            <p>お探しのページは見つかりませんでした。</p>
            <p>削除、変更されたか URL が間違っている可能性があります。</p>
          </div>
        </div>
      </div>
      <Link className={buttonVariants({ variant: "outline" })} to={PATH.ROOT}>
        トップに戻る
      </Link>
    </div>
  );
};
