import Image from "next/image";
import Script from "next/script";
import { BsGithub, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import localFont from "next/font/local";

const Orbitron = localFont({
  src: "../fonts/Orbitron/static/Orbitron-Black.ttf",
});

const Profile = () => {
  return (
    <section className="bg-white dark:bg-gray-900 dark:text-gray-100  grid md:grid-cols-3 gap-4 px-5 py-5 xpt md:px-20 md:items-center md:text-left">
      <div className="">
        <Image
          src="/assets/images/profile-pic2.webp"
          width={300}
          height={300}
          alt="Picture of Abass Dev"
          className="rounded-xl w-full"
        /> 
      </div>
      <div className="md:col-span-2">
        <h1 className={`${Orbitron.className} text-3xl my-4 text-blue-950 dark:text-gray-100`}>
          Abass Dev
        </h1>
        <div>
          <p className="text-lg">
            A passionate web and mobile app developer with over 6 years of
            experience in programming and the internet.
          </p>
          <p className="text-lg">
            In my free time, I enjoy sharing my experiences through my blog{" "}
            <a className="text-blue-700" href="https:/byteteachers.com">
              byteteachers.com{" "}
            </a>{" "}
            and contributing to the{" "}
            <a className="text-blue-700" href="github.com/abass-dev">
              open-source community
            </a>
            . I am also the creator of the{" "}
            <a className="text-blue-700" href="https://github.com/nigaphp">
              NigaPHP framework
            </a>
            .
          </p>
        </div>
        <div className="flex text-gray-600 dark:text-gray-100 justify-center w-full gap-3 py-4">
          <a  aria-label={`Abass Dev github account`} href="https://github.com/abass-dev">
            <BsGithub size={25} />
          </a>
          <a aria-label={`Abass Dev twitter account`} href="https://twitter.com/abass_dev">
            <BsTwitter size={25} />
          </a>
          <a href="https://m.facebook.com/abassthedev">
            <BsFacebook size={25} />
          </a>
          <a aria-label={`Abass Dev email address`} href="/contact">
            <MdEmail size={25} />
          </a>
        </div>
        <div className="w-full text-center">
          <Link className="text-blue-700" href="/my-story">
            Read more about me...
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Profile;
