"use client";

import { useRouter } from "next/navigation";
import { FaTags } from "react-icons/fa";

const TagsButton = ({ tags, className }: any) => {
  const router = useRouter();

  const handleClick = (tag: any) => {
    router.push(`/blog/posts/tags/${tag}`);
  };

  return (
    tags && (
      <div className={`cursor-pointer ${className}`}>
        <FaTags />
        {tags &&
          tags.split(",").map((tag: any, index: number) => {
            return (
              <div
                onClick={() => handleClick(tag)}
                className="text-pink-700 uppercase"
                key={index}
              >
                #{tag}
              </div>
            );
          })}
      </div>
    )
  );
};

export default TagsButton;
