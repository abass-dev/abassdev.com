"use client";

import Image from "next/image";
import { birthday } from "../../helpers";
import { Report } from "../";
import localFont from "next/font/local";

const Orbitron = localFont({
  src: "../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

const MyStory = () => {
  return (
    <>
      <div className=" dark:text-gray-100 dark:bg-gray-900">
        <div
          className={`pt-20 pb-10 container mx-auto px-8 md:px-10 lg:px-20 xl:px-32`}
        >
          <div className="">
            <h1
              className={`${Orbitron.className} text-center font-bold  dark:text-white text-4xl pb-10 my-4 text-blue-950`}
            >
              About Me
            </h1>
            <div className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
              <Image
                className="w-full"
                src="/assets/images/about.webp"
                width={430}
                height={600}
                alt="Who is Abass Dev? - About Me"
              />
            </div>
            <div className="px-6 bg-white dark:bg-gray-800 grid grid-cols-1 gap-4 py-4">
              <h1 className="font-bold text-xl mb-2">Who is Abass Dev?</h1>
              <p className="dark:text-gray-100 text-gray-700 text-base">
                Abass Ben Cheik, who goes by the name Abass Dev, is a talented
                full-stack developer with a passion for building exceptional Web
                and Mobile applications. He was born in Niamey, Niger, on
                February 2, 1994. He is currently{" "}
                {birthday(new Date("02-02-1994"))}
              </p>

              <p className="text-base dark:text-gray-100 text-gray-700">
                At a young age of 15 in 2009, Abass Dev became fascinated with
                the world of web development. However, he had no idea where to
                start. It wasn't until he met a friend on Skyrock, a social
                networking site, in 2011, that he was introduced to the world of
                blogging and tasked with administering a Wix-created blog. It
                was this experience that sparked his curiosity and ignited his
                passion for web development.
              </p>

              <p className="text-base dark:text-gray-100 text-gray-700">
                In 2012, Abass Dev created his first blog on the Blogspot
                platform, but soon discovered its limitations. Determined to
                expand his knowledge and capabilities, he began to explore the
                depths of web development using languages such as HTML, CSS,
                JavaScript, PHP, SQL, and others.
              </p>
              <p className="text-base dark:text-gray-100 text-gray-700">
                With his dedication and hard work, Abass Dev honed his skills
                and became a self-taught full-stack developer.
              </p>
              <p className="text-base dark:text-gray-100 text-gray-700">
                Today, he has an impressive portfolio of work that showcases his
                expertise in building dynamic, responsive, and visually
                appealing web applications.
              </p>
              <p className="text-base dark:text-gray-100 text-gray-700">
                In addition to his technical abilities, Abass Dev has a keen eye
                for design and aesthetics, which allows him to create stunning
                and functional user interfaces. He is always learning and
                staying up-to-date with the latest trends and technologies in
                the ever-evolving field of web development.
              </p>
              <p className="text-base dark:text-gray-100 text-gray-700">
                Abass Dev is a true testament to the power of self-education and
                perseverance. His passion and commitment to his craft have led
                him to become a respected figure in the web development
                community, and a source of inspiration for aspiring developers
                around the world.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Report report="my-story/page" />
    </>
  );
};

export default MyStory;
