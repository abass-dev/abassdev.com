import Responsive from "@/utils/googleADS/Responsive";
import BlogEntries from "./BlogEntries";
import localFont from "next/font/local";
const Orbitron = localFont({
  src: "../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

const BlogSection = () => {
  return (
    <div className="container mx-auto px-8 md:px-10 lg:px-20 xl:px-32 dark:text-gray-100  dark:bg-gray-900">
      <div className="">
        <h1
          className={`${Orbitron.className} text-center font-bold  dark:text-white text-4xl pb-10 my-4 text-blue-950`}
        >
          RECENT BLOG POSTS
        </h1>
          <BlogEntries/>
          <Responsive />
      </div>
    </div>
  );
};

export default BlogSection;
