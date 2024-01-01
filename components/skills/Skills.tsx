import {
  FaAppStore,
  FaChrome,
  FaFigma,
  FaGitAlt,
  FaInternetExplorer,
  FaJava,
  FaPaintBrush,
  FaReact,
  FaServer,
} from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";
import { GiPadlock } from "react-icons/gi";
import { BsDatabaseAdd, BsWordpress } from "react-icons/bs";
import Item from "./Item";
import localFont from "next/font/local";
import { FcLinux, FcSmartphoneTablet } from "react-icons/fc";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAndroidstudio,
  SiTorbrowser,
} from "react-icons/si";

import { TbBrandReactNative, TbBrandVscode, TbSql } from "react-icons/tb";
const Orbitron = localFont({
  src: "../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

/**
 * Renders the Skills component.
 *
 * @return {JSX.Element} The rendered Skills component.
 */
const Skills = (): JSX.Element => {
  return (
    <div
      id="Skills"
      className="container mx-auto md:px-10 lg:px-20 xl:px-32 dark:bg-gray-900 00  text-black px-10 dark:text-white pt-10 flex items-center flex-col justify-center"
    >
      <div className="">
        <h1
          className={`${Orbitron.className} text-center font-bold  dark:text-white text-4xl pb-10 my-4 text-blue-950`}
        >
          Skills
        </h1>
        <div className="grid gap-8  md:grid-cols-2">
          <div>
            <Item
              title="Web Development"
              desc="I specialize in providing functional web services that include custom website development, WordPress development, e-commerce solutions, and more."
              icon={{
                source: <FaInternetExplorer size={60} />,
                color: "text-sky-600",
                bg: "bg-sky-200",
              }}
              toolIcons={[
                {
                  source: <BsWordpress className={"text-3xl"} />,
                  color: "text-sky-800",
                },
                {
                  source: <FaGitAlt className={"text-3xl"} />,
                  color: "text-gray-900",
                },
                {
                  source: <FaReact className={"text-3xl"} />,
                  color: "text-sky-700",
                },
                {
                  source: <FaChrome className={"text-3xl"} />,
                  color: "text-green-700",
                },
                {
                  source: <TbBrandVscode className={"text-3xl"} />,
                  color: "text-sky-800",
                },
              ]}
            />
          </div>
          <div>
            <Item
              title="SEO and security"
              desc="I offer top-notch solutions in both software security and SEO practices that can help boost the quantity and quality of traffic to your website."
              icon={{
                source: <GiPadlock size={60} />,
                color: "text-red-600",
                bg: "bg-red-200",
              }}
              toolIcons={[
                {
                  source: <BsDatabaseAdd className={"text-3xl"} />,
                  color: "text-red-600",
                },
                {
                  source: <IoAnalyticsOutline className={"text-3xl"} />,
                  color: "text-yellow-600",
                },

                {
                  source: <FcLinux className={"text-3xl"} />,
                  color: "text-sky-700",
                },
                {
                  source: <FaServer className={"text-3xl"} />,
                  color: "text-gray-700",
                },
                {
                  source: <SiTorbrowser className={"text-3xl"} />,
                  color: "text-pink-800",
                },
              ]}
            />
          </div>
          <div>
            <Item
              icon={{
                source: <FaPaintBrush size={60} />,
                color: "text-gray-600",
                bg: "bg-gray-200",
              }}
              title="Web Design"
              desc="My web design skill include creating stunning, intuitive websites that effectively represent your brand and corporate identity through exceptional UI/UX design."
              toolIcons={[
                {
                  source: <SiAdobeillustrator className={"text-3xl"} />,
                  color: "text-yellow-600",
                },

                {
                  source: <BsWordpress className={"text-3xl"} />,
                  color: "text-sky-800",
                },
                {
                  source: <FaFigma className={"text-3xl"} />,
                  color: "text-orange-800",
                },
                {
                  source: <SiAdobephotoshop className={"text-3xl"} />,
                  color: "text-sky-400",
                },
              ]}
            />
          </div>
          <div>
            <Item
              icon={{
                source: <FcSmartphoneTablet size={60} />,
                color: "text-green-600",
                bg: "bg-green-200",
              }}
              title="Mobile App"
              desc="I create beautiful and functional apps for iOS and Android using React Native. With my expertise in this framework, I can bring your app idea to life and deliver top-notch results."
              toolIcons={[
                {
                  source: <SiAndroidstudio className={"text-3xl"} />,
                  color: "text-sky-800",
                },

                {
                  source: <FaAppStore className={"text-3xl"} />,
                  color: "text-orange-700",
                },
                {
                  source: <FaJava className={"text-3xl"} />,
                  color: "text-yellow-900",
                },
                {
                  source: <TbBrandReactNative className={"text-3xl"} />,
                  color: "text-green-700",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
