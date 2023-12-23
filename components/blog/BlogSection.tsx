import HomeItems from "../snippets/HomeItems";
import localFont from "next/font/local";
const Orbitron = localFont({
  src: "../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

const BlogSection = () => {
  return (
    <div className="dark:text-gray-100  dark:bg-gray-900 pb-20">
      <div className="container mx-auto px-10 pt-40">
        <h1
          className={`${Orbitron.className} text-center font-bold  dark:text-white text-4xl pb-20 my-4 text-blue-950`}
        >
          Blog Posts
        </h1>

        <div className="grid grid-cols-2  gap-20">
          <div className="col-span-2 md:col-span-1 bg-white dark:bg-gray-800 flex justify-center shadow-xl md:py-6">
            <HomeItems
              title="Internal blog"
              bgImg={`bg-[url("/assets/images/react-snippet.svg")]`}
              desk="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </div>
          <div className="col-span-2 md:col-span-1 bg-white dark:bg-gray-800 flex justify-center shadow-xl md:py-6">
            <HomeItems
              title="External blog"
              bgImg={`bg-[url("/assets/images/project-nigaphp.webp")]`}
              desk="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </div>
          <div className="col-span-2 md:col-span-1 bg-white dark:bg-gray-800 flex justify-center shadow-xl md:py-6">
            <HomeItems
              title="Proverbs"
              bgImg={`bg-[url("/assets/images/design3.webp")]`}
              desk="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
