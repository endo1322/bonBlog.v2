import { URL } from "@/constants/url";
import { AlertTriangle } from "@bonblogv2/ui/icons";
import { Link } from "react-router";

export const VersionWarningDisplay = () => {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-2 rounded-lg bg-orange-50 p-6 md:flex-row md:gap-8">
      <AlertTriangle className="h-12 w-12 text-orange-500" />
      <div className="text-center font-medium text-orange-700">
        <p>この投稿は前バージョンのサイト用に書いた記事です。</p>
        <p>
          <Link
            className="font-semibold hover:text-oarange-800 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            to={URL.V1}
          >
            こちら
          </Link>
          から前バージョンのサイトに移動できます。
        </p>
      </div>
    </div>
  );
};
