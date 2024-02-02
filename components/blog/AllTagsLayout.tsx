import Link from "next/link";

const AllTagsButton = ({ tags }: any) => {
  return (
    tags && (
      <section key={tags.id}>
        {tags &&
          tags.split(",").map((tag: any, index: number) => {
            return (
              <Link
                href={`/blog/posts/tags/${tag}`}
                className="cursor-pointer font-bold ml-4 hover:text-sky-500 text-sky-700 uppercase"
                key={tag.id}
              >
                {tag}
              </Link>
            );
          })}
      </section>
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
            className="font-bold ml-4 text-gray-500  uppercase"
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
