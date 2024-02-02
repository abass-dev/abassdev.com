import localFont from "next/font/local";
import HomeItems from "../HomeBlogSectionItems";
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
          Blog Posts
        </h1>

        <div className="grid grid-cols-2  gap-10">
          <HomeItems
            learnMore={{ text: "Browse blog posts now...", href: "/blog" }}
            title="Developers blog"
            bgImg={`bg-[url("/assets/images/react-code.webp")]`}
            desk="Where I passionately share my knowledge with the world during my free time."
          />

          <HomeItems
            learnMore={{
              text: "Learn More...",
              href: "https://byteteachers.com/",
            }}
            title="External blog"
            bgImg={`bg-[url("/assets/images/project-nigaphp.webp")]`}
            desk="External blog posts from Byteteachers.com"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
