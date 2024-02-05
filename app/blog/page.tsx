import BlogNav from "@/components/blog/BlogNav";
import localFont from "next/font/local";
import AllTagsLayout from "@/components/blog/AllTagsLayout";
import getTags from "@/components/blog/lib/getAllTags";
import getAllPosts from "@/components/blog/lib/getAllPosts";
import { getLastPost } from "@/components/blog/lib/getLastPost";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import MainPostCard from "@/components/blog/MainPostCard";
import AllCategoriesLayout from "@/components/blog/AllCategoriesLayout";
import getAllTCategories from "@/components/blog/lib/getAllCategories";
import BlogSearch from "@/components/blog/lib/BlogSearch";
import searchData from "@/components/blog/lib/data/search-data";
const Orbitron = localFont({
  src: "../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

const Blog = async () => {
  const posts = await getAllPosts();

  const tags = await getTags();
  const categories = await getAllTCategories();

  return (
    <>
      <BlogNav>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="flex justify-center flex-col gap-5 my-5 items-center min-h-[20vh] md:min-h-[25vh]">
            <h1
              className={`${Orbitron.className} text-2xl text-gray-700 dark:text-gray-200 md:text-5xl font-bold text-center`}
            >
              Devs Blog
            </h1>
            <p className="text-black text-center text-base dark:text-gray-200">
              Stay ahead with valuable resources, offering industry insights,
              best practices, and more to keep you well-informed.
            </p>
          </div>
          <BlogSearch posts={posts} />

          <div className="flex sm:space-x-24">
            <div className="hidden h-full max-h-screen flex-col min-w-[280px] max-w-[280px]  overflow-auto rounded bg-gray-100 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
              <div className="pb-2 ml-2 flex flex-col gap-5">
                <h1 className="font-bold text-xl uppercase dark:text-gray-500 text-gray-700">
                  Tags
                </h1>
                <AllTagsLayout tags={tags} />

                <h1 className="font-bold text-xl uppercase dark:text-gray-500 text-gray-700">
                  Categories
                </h1>
                <AllCategoriesLayout categories={categories} />
              </div>
            </div>
            <div>
              <MainPostCard posts={posts} />
            </div>
          </div>
        </div>
      </BlogNav>
    </>
  );
};

export default Blog;
