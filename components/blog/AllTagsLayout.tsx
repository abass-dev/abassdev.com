import Link from "next/link";

const AllTagsButton = ({ tag }: any) => {
  return (
    <div>
      <Link
        href={`/blog/posts/tags/${tag}`}
        className="cursor-pointer font-bold ml-4 hover:text-sky-500 text-sky-700 uppercase"
      >
        {tag}
      </Link>
    </div>
  );
};
const AllTagsLayout = ({ tags }: any) => {
  return (
    <div className="flex flex-col gap-2">
      {tags.map((tag: any, index: number) => {
        return (
          <div key={index}>
            <AllTagsButton
              tag={tag.tag_name}
              className="font-bold ml-4 text-gray-500  uppercase"
              key={tag.id}
            >
              {tag.tag_name}
            </AllTagsButton>
          </div>
        );
      })}
    </div>
  );
};

export default AllTagsLayout;
