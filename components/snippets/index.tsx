import localFont from "next/font/local";
import HomeItems from "./HomeItems";

const Orbitron = localFont({
  src: "../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

const Snippet = () => {
  return (
    <div className="flex justify-center dark:text-gray-100 dark:bg-gray-900 pb-10">
      <div className="w-4/5 container mx-auto pt-32 lg:pt-10">
        <div className="grid pb-20 place-items-center">
          <h1
            className={`${Orbitron.className}  font-bold  dark:text-white text-3xl md:text-5xl pb-8 my-4 text-blue-950`}
          >
            Short Code Snippets
          </h1>
          <p className="font-normal dark:text-white text-gray-700">
            Easily improve your skills with code snippets
          </p>
        </div>

        <div className="grid grid-cols-2  gap-10">
          <HomeItems
            learnMore={{ text: "Learn React.js...", href: "/snippets/react" }}
            title="React code snippet"
            bgImg={`bg-[url("/assets/images/react-snippet.svg")]`}
            desk="Master React.js with Ease: Dive into Simple, Hands-on Learning with Code Snippets"
          />

          <HomeItems
            learnMore={{ text: "Learn PHP...", href: "/snippets/php" }}
            title="PHP code snippet"
            bgImg={`bg-[url("/assets/images/php-code2.webp")]`}
            desk="Master PHP with Ease: Dive into Simple, Hands-on Learning with Code Snippets"
          />
          <HomeItems
            learnMore={{
              text: "Learn React Native...",
              href: "/snippets/react-native",
            }}
            title="React Native code snippet"
            bgImg={`bg-[url("/assets/images/react-code.webp")]`}
            desk="Master React Native with Ease: Dive into Simple, Hands-on Learning with Code Snippets"
          />
        </div>
      </div>
    </div>
  );
};

export default Snippet;
