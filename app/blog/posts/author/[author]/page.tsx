import AllTagsLayout from "@/components/blog/AllTagsLayout";
import BlogNav from "@/components/blog/BlogNav";
import MainPostAction from "@/components/blog/MainPostCard";
import getAllPosts from "@/components/blog/lib/getAllPosts";
import getPostsByAuthor from "@/components/blog/lib/getPostsByAuthor";
import localFont from "next/font/local";
import getAllTags from "@/components/blog/lib/getAllTags";
const Orbitron = localFont({
  src: "../../../../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

export const generateStaticParams = async () => {
  const posts = await getAllPosts();
  return posts.map((post: any) => {
    return {
      author: post.author_username,
    };
  });
};

export async function generateMetadata({ params }: any) {
  return {
    title: `Posts by ${params.author}'s | Developer's Blog`,
    description: `Discover articles written by ${params.author} on Developer's Blog.`,
  };
}

const page = async ({ params }: any) => {
  const posts = await getPostsByAuthor(params.author);
  const tags = await getAllTags();
  return (
    <>
      <BlogNav>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="flex justify-center items-center min-h-[20vh] md:min-h-[40vh]">
            <h1
              className={`${Orbitron.className} text-2xl text-gray-600 md:text-5xl font-bold text-center`}
            >
              By:{" "}
              <span className="text-sky-600">{posts[0].author_fullname}</span>
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
              <MainPostAction posts={posts} />
            </div>
          </div>
        </div>
      </BlogNav>
    </>
  );
};

export default page;
