import Image from "next/image";
import { BsGithub, BsFacebook, BsTwitter, BsLinkedin, BsDownload } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import localFont from "next/font/local";
import { FaArrowAltCircleRight } from "react-icons/fa";
const Orbitron = localFont({
  src: "../fonts/Orbitron/static/Orbitron-Black.ttf",
});
const EduNSWACTFoundation = localFont({
  src: "../fonts/Edu_NSW_ACT_Foundation/static/EduNSWACTFoundation-Bold.ttf",
});
import ShimmerButton from "./ui/shimmer-button";
import ShineBorder from "./ui/shine-border";
import TypingAnimation from "./ui/typing-animation";

const Profile = () => {
  return (
    <div className="bg-gradient-to-tr from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 min-h-screen flex justify-center items-center">
      <section className="container mx-auto max-w-6xl p-10 grid md:grid-cols-3 gap-10 md:items-center">
        {/* Profile Picture */}
        <ShineBorder 
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        className="bg-transparent dark:bg-transparent overflow-hidden relative rounded-lg flex justify-center">
          <Image
            src="/assets/images/profile.webp"
            width={300}
            height={300}
            alt="Picture of Abass Dev"
            className="rounded-full bg-transparent"
          />
        </ShineBorder>

        {/* Profile Description */}
        <div className="md:col-span-2">
        <TypingAnimation
           text="I am,"
            className={`${EduNSWACTFoundation.className} text-left text-5xl bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent`}
          />
            
          
          <h1
            className={`${Orbitron.className} text-3xl md:text-5xl my-4 text-blue-900 dark:text-blue-300`}
          >
            Abass Dev
          </h1>
          <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
            A passionate web and mobile app developer with over 6 years of experience in programming and the internet.
            In my free time, I enjoy sharing my experiences through my{" "}
            <Link
              href="https://abassdev.com/blog"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              blog
            </Link>{" "}
            and contributing to the{" "}
            <Link
              href="https://github.com/abass-dev"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              open-source community
            </Link>
            . I am also the creator of the{" "}
            <Link
              href="https://github.com/nigaphp"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              NigaPHP framework
            </Link>
            .
          </p>
          {/* CV Download */}
          <div className="mt-6 flex justify-center md:justify-start gap-4 items-center">
            <ShimmerButton className="shadow-2xl">
              <a
                href="/assets/pdf/abass-cv-fr.pdf"
                download={true}
                className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                RESUME
              </a>
            </ShimmerButton>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start mt-8 gap-5 text-gray-700 dark:text-gray-300">
            <Link href="https://github.com/abass-dev" target="_blank" aria-label="GitHub">
              <BsGithub size={30} className="hover:text-gray-400" />
            </Link>
            <Link href="https://www.linkedin.com/in/abass-dev-a45932311" target="_blank" aria-label="LinkedIn">
              <BsLinkedin size={30} className="hover:text-gray-400" />
            </Link>
            <Link href="https://twitter.com/abass_dev" target="_blank" aria-label="Twitter">
              <BsTwitter size={30} className="hover:text-gray-400" />
            </Link>
            <Link href="https://m.facebook.com/abassthedev" target="_blank" aria-label="Facebook">
              <BsFacebook size={30} className="hover:text-gray-400" />
            </Link>
            <Link href="/contact" aria-label="Email">
              <MdEmail size={30} className="hover:text-gray-400" />
            </Link>
          </div>

          {/* More About Me Link */}
          <div className="mt-8 text-center md:text-left">
            <Link href="/my-story" className="uppercase flex gap-2 dark:text-gray-300 justify-center md:justify-start items-center hover:text-blue-700 hover:underline">
              Read more about me {' '} <FaArrowAltCircleRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
