import AllTagsLayout from "@/components/blog/AllTagsLayout";
import BlogNav from "@/components/blog/BlogNav";
import MainPostAction from "@/components/blog/MainPostAction";
import getAllPosts from "@/components/blog/lib/getAllPosts";
import getTags from "@/components/blog/lib/getAllTags";
import getCategory from "@/components/blog/lib/getCategory";
import localFont from "next/font/local";

const Orbitron = localFont({
  src: "../../../../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

export const generateStaticParams = async () => {
  const posts = await getAllPosts();
  return posts.map((post: any) => {
    return {
      category: post.category,
    };
  });
};

export async function generateMetadata({ params }: any) {
  return {
    title: `Category ${params.category} | Developer's Blog`,
    description: `Explore articles on ${params.category} in Developer's Blog.`,
  };
}

const page = async ({ params }: any) => {
  const tags = await getTags();
  const postByCategories = await getCategory(params.category);

  return (
    <>
      <BlogNav>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="flex justify-center items-center min-h-[20vh] md:min-h-[40vh]">
            <h1
              className={`${Orbitron.className} text-2xl text-gray-600 md:text-5xl font-bold text-center`}
            >
              Category:
              <span className="text-sky-600 uppercase"> {params.category}</span>
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
              <MainPostAction posts={postByCategories} />
            </div>
          </div>
        </div>
      </BlogNav>
    </>
  );
};

export default page;
