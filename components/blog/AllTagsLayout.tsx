"use client";
import { useRouter } from "next/navigation";

const AllTagsButton = ({ tags }: any) => {
  const router = useRouter();
  const handleClick = (tag: any) => {
    router.push(`/blog/posts/tags/${tag}`);
  };

  return (
    tags && (
      <div>
        {tags &&
          tags.split(",").map((tag: any, index: number) => {
            return (
              <p
                onClick={() => handleClick(tag)}
                className="cursor-pointer font-bold ml-4 text-gray-500 uppercase"
                key={index}
              >
                {tag}
              </p>
            );
          })}
      </div>
    )
  );
};
const AllTagsLayout = ({ tags }: any) => {
  return (
    <div className="flex flex-col gap-1 min-h-[350px]">
      {tags.map((tag: any) => {
        return (
          <AllTagsButton
            tags={tag.tag_name}
            className="font-bold ml-4 text-gray-500 uppercase"
            key={tag.id}
          >
            {tag.tag_name}
          </AllTagsButton>
        );
      })}
    </div>
  );
};

export default AllTagsLayout;
