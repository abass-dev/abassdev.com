import BlogNav from "@/components/blog/BlogNav";
import localFont from "next/font/local";
import MainPostAction from "@/components/blog/MainPostAction";
import AllTagsLayout from "@/components/blog/AllTagsLayout";
import getTags from "@/components/blog/utils/getAllTags";
import getAllPosts from "@/components/blog/utils/getAllPosts";
import { getLastPost } from "@/components/blog/getLastPost";
import Link from "next/link";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import API from "@/components/api";

const Orbitron = localFont({
  src: "../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

const Blog = async () => {
  const posts = await getAllPosts();
  const tags = await getTags();
  const lastPost = await getLastPost();

  return (
    <>
      <BlogNav>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="flex justify-center items-center min-h-[20vh] md:min-h-[25vh]">
            <h1
              className={`${Orbitron.className} text-2xl text-gray-600 dark:text-gray-400 md:text-5xl font-bold text-center`}
            >
              Devs Blog
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-600 dark:text-gray-400 text-3xl">
              Latest Post
            </p>
            <div className="mt-3 mb-20 p-4">
              <Link
                className="font-semibold line-clamp-1 text-blue-600 text-xl text-center hover:text-blue-800"
                href={`/blog/posts/${lastPost[0].slug}`}
              >
                {lastPost[0].title} ...
              </Link>
            </div>
          </div>
          <div className="flex sm:space-x-24">
            <div className="hidden h-full max-h-screen flex-col min-w-[280px] max-w-[280px]  overflow-auto rounded bg-gray-100 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
              <div className="pb-2 ml-2">
                <h1 className="font-bold text-xl uppercase dark:text-gray-500 text-gray-700">
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

export default Blog;
