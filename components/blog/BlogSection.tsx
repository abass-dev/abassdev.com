import Responsive from "@/utils/googleADS/Responsive";
import BlogEntries from "./BlogEntries";

const BlogSection = () => {
  return (
    <div className="container mx-auto px-8 md:px-10 lg:px-20 xl:px-32 pt-10 dark:text-gray-100  from-background to-background/95">
      <div className="">
        <h1 className={`font-orbitron mb-16 text-center text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent`}>
          Recent Blog Postes
        </h1>
        <BlogEntries />
        <Responsive />
      </div>
    </div>
  );
};

export default BlogSection;
