import Link from "next/link";
import { FaTags } from "react-icons/fa";

const TagsButton = ({ tags, className }: any) => {
  return (
    tags && (
      <div className={`cursor-pointer ${className}`}>
        <FaTags />
        {tags &&
          tags.split(",").map((tag: any, index: number) => {
            return (
              <div key={index}>
                <Link
                  href={`/blog/posts/tags/${tag}`}
                  className="text-pink-700 hover:text-pink-400 uppercase"
                >
                  {tag}
                </Link>
              </div>
            );
          })}
      </div>
    )
  );
};

export default TagsButton;
