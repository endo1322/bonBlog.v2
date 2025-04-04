import { PATH } from "@/constants/path";
import { URL } from "@/constants/url";
import { Github } from "lucide-react";
import { Link } from "react-router";

const Header = () => {
  return (
    <nav className="flex w-full justify-center bg-white shadow-sm">
      <div className="flex h-16 w-full max-w-6xl justify-between px-4 md:px-8">
        <div className="flex items-center">
          <Link to={PATH.HOME}>
            <span className="font-semibold text-2xl text-gray-900">bonBlog.v2</span>
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            to={URL.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors hover:text-gray-700"
          >
            <Github className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
