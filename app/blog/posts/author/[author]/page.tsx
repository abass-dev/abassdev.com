import AllTagsLayout from "@/components/blog/AllTagsLayout";
import BlogNav from "@/components/blog/BlogNav";
import MainPostAction from "@/components/blog/MainPostAction";
import getPostsByAuthor from "@/components/blog/utils/getPostsByAuthor";
import getTags from "@/components/blog/utils/getTags";
import localFont from "next/font/local";
const Orbitron = localFont({
  src: "../../../../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5001/api/posts");
  const posts = await res.json();
  console.log(posts);

  return posts.map((post: any) => ({
    author: post.author_username,
  }));
};

const page = async ({ params }: any) => {
  const posts = await getPostsByAuthor(params.author);
  const tags = await getTags();
  return (
    <>
      <BlogNav>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="flex justify-center items-center min-h-[20vh] md:min-h-[40vh]">
            <h1
              className={`${Orbitron.className} text-2xl text-gray-600 md:text-5xl font-bold text-center`}
            >
              Posted by {params.author}
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
