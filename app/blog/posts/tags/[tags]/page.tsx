import AllTagsLayout from "@/components/blog/AllTagsLayout";
import BlogNav from "@/components/blog/BlogNav";
import MainPostAction from "@/components/blog/MainPostAction";
import getTags from "@/components/blog/utils/getTags";
import localFont from "next/font/local";
import { notFound } from "next/navigation";

const Orbitron = localFont({
  src: "../../../../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5001/api/posts/tags");
  if (!res.ok) {
    notFound();
  }
  const tags = await res.json();
  return tags.map((tag: any) => {
    return {
      tags: tag.tag_name,
    };
  });
};

const getPost = async (tag: string) => {
  const res = await fetch(`http://localhost:5001/api/posts/tag/${tag}`);
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();

  return data;
};

const page = async ({ params }: any) => {
  const tags = await getTags();
  const postByTags = await getPost(params.tags);

  return (
    <>
      <BlogNav>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="flex justify-center items-center min-h-[20vh] md:min-h-[40vh]">
            <h1
              className={`${Orbitron.className} text-2xl text-gray-600 md:text-5xl font-bold text-center`}
            >
              Tag:
              <span className="text-sky-600 uppercase"> {params.tags}</span>
            </h1>
          </div>
          <div className="flex sm:space-x-24">
            <div className="hidden h-full max-h-screen flex-col min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-100 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
              <div className="pb-2 ml-2">
                <h1 className="font-bold text-xl uppercase text-gray-700">
                  All Tags
                </h1>
              </div>
              <AllTagsLayout tags={tags} />
            </div>
            <div>
              <MainPostAction posts={postByTags} />
            </div>
          </div>
        </div>
      </BlogNav>
    </>
  );
};

export default page;
