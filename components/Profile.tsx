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
    <div className=" bg-white flex justify-center items-center min-h-screen  shadow-lg dark:bg-gray-800">
      <section className="container mx-auto text-xl pt-32  grid md:grid-cols-3 gap-8 py-10 px-10 md:px-20 md:items-center md:text-left">
        <div className="flex justify-center">
          <Image
            src="/assets/images/profile-picture.webp"
            width={300}
            height={300}
            alt="Picture of Abass Dev"
            className="h-auto hover:scale-110  hover:shadow-md hover:shadow-green-700 rounded-full"
          />
        </div>
        <div className="md:col-span-2">
          <h1
            className={`${Orbitron.className} dark:text-white text-3xl md:text-5xl pb-8 my-4 text-blue-950`}
          >
            Abass Dev
          </h1>
          <div className="text-gray-950 dark:text-gray-100">
            <p className="text-xl">
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
            <a
              aria-label={`Abass Dev github account`}
              href="https://github.com/abass-dev"
            >
              <BsGithub size={25} />
            </a>
            <a
              aria-label={`Abass Dev twitter account`}
              href="https://twitter.com/abass_dev"
            >
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
    </div>
  );
};
export default Profile;
