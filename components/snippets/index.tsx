import localFont from "next/font/local";
import HomeItems from "./HomeItems";

const Orbitron = localFont({
  src: "../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

const Snippet = () => {
  return (
    <div className="dark:text-gray-100  dark:bg-gray-900 pb-20">
      <div className="container mx-auto pt-40 lg:pt-20">
        <div className="grid pb-20 place-items-center">
          <h1
            className={`${Orbitron.className}  font-bold  dark:text-white text-3xl md:text-5xl pb-8 my-4 text-blue-950`}
          >
            Short Code Snippets
          </h1>
          <p className="font-normal dark:text-white text-gray-700">
            Learn from experts
          </p>
        </div>

        <div className="grid grid-cols-2  gap-20">
          <div className="col-span-2 md:col-span-1 bg-white dark:bg-gray-800 flex justify-center shadow-xl py-6">
            <HomeItems
              learnMore={{ text: "Learn More...", href: "/snippets/react" }}
              title="React code snippet"
              bgImg={`bg-[url("/assets/images/react-snippet.svg")]`}
              desk="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </div>
          <div className="col-span-2 md:col-span-1 bg-white dark:bg-gray-800 flex justify-center shadow-xl py-6">
            <HomeItems
              learnMore={{ text: "Learn More...", href: "/snippets/react" }}
              title="React code snippet"
              bgImg={`bg-[url("/assets/images/php_code.webp")]`}
              desk="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </div>
          <div className="col-span-2 md:col-span-1 bg-white dark:bg-gray-800 flex justify-center shadow-xl py-6">
            <HomeItems
              learnMore={{ text: "Learn More...", href: "/snippets/react" }}
              title="React code snippet"
              bgImg="php_code.webp"
              desk="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </div>
          <div className="col-span-2 md:col-span-1 bg-white dark:bg-gray-800 flex justify-center shadow-xl py-6">
            <HomeItems
              learnMore={{ text: "Learn More...", href: "/snippets/react" }}
              title="React code snippet"
              bgImg="php_code.webp"
              desk="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </div>
          <div className="col-span-2 md:col-span-1 bg-white dark:bg-gray-800 flex justify-center shadow-xl py-6">
            <HomeItems
              learnMore={{ text: "Learn More...", href: "/snippets/react" }}
              title="React code snippet"
              bgImg="php_code.webp"
              desk="Some quick example text to build on the card title and make up the bulk of the card's content."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snippet;
