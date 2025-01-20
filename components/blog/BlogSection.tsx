import Responsive from "@/utils/googleADS/Responsive";
import BlogEntries from "./BlogEntries";

const BlogSection = () => {
  return (
    <div className="container mx-auto px-8 md:px-10 lg:px-20 xl:px-32 pt-10 dark:text-gray-100  dark:bg-gray-900">
      <div className="">
        <h1
          className={`font-orbitron text-center font-bold  dark:text-white text-4xl pb-10 my-4 text-blue-950`}
        >
          RECENT BLOG POSTS
        </h1>
        <BlogEntries />
        <Responsive />
      </div>
    </div>
  );
};

export default BlogSection;
