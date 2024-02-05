import Link from "next/link";
import { FaTags } from "react-icons/fa";

const TagsButton = ({ tag, className }: any) => {
  return (
    <div className={`cursor-pointer ${className}`}>
      <FaTags />

      <div>
        <Link
          href={`/blog/posts/tags/${tag}`}
          className="text-pink-700 hover:text-pink-400 uppercase"
        >
          {tag}
        </Link>
      </div>
    </div>
  );
};

export default TagsButton;
