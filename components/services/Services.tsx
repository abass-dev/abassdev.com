import { FaGlobeAfrica, FaPaintBrush } from "react-icons/fa";
import { DiGoogleAnalytics } from "react-icons/di";
import { MdPhoneAndroid } from "react-icons/md";
import { BsQuestionDiamondFill } from "react-icons/bs";
import Item from "./Item";
import localFont from "next/font/local";
const Orbitron = localFont({
  src: "../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

const Services = () => {
  return (
    <div
      id="services"
      className="dark:bg-gray-900 text-black px-10 dark:text-white pt-32 flex items-center flex-col justify-center"
    >
      <div className="container mx-auto">
        <h1
          className={`${Orbitron.className} text-center font-bold  dark:text-white text-4xl pb-20 my-4 text-blue-950`}
        >
          Services
        </h1>
        <div className="grid gap-8 place-items-center md:grid-cols-2">
          <Item
            icon={
              <FaGlobeAfrica className="text-gray-500 text-center" size={100} />
            }
            title="Web Development"
            desc="I specialize in providing functional web services that include custom website development, WordPress development, e-commerce solutions, and more."
          />

          <Item
            icon={
              <DiGoogleAnalytics
                className="text-gray-500 text-center"
                size={100}
              />
            }
            title="SEO and security"
            desc="I offer top-notch solutions in both software security and SEO practices that can help boost the quantity and quality of traffic to your website."
          />

          <Item
            icon={
              <FaPaintBrush className="text-gray-500 text-center" size={100} />
            }
            title="Web Design"
            desc="My web design services include creating stunning, intuitive websites that effectively represent your brand and corporate identity through exceptional UI/UX design."
          />

          <Item
            icon={
              <MdPhoneAndroid
                className="text-gray-500 text-center"
                size={100}
              />
            }
            title="Mobile App"
            desc="I create beautiful and functional apps for iOS and Android using React Native. With my expertise in this framework, I can bring your app idea to life and deliver top-notch results."
          />
          <Item
            icon={
              <BsQuestionDiamondFill
                className="text-gray-500 text-center"
                size={100}
              />
            }
            title="Problem solving"
            desc="I possess a solid understanding of the problem-solving process and techniques to address issues. My approach is to always strive for the optimal solution to a problem, and I remain receptive to new ideas that could lead to better outcomes."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
