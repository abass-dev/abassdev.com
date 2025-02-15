"use client";
import React from 'react';
import { birthday } from '../../helpers';
import { Report } from '../';
import { Responsive } from '@/utils';

const biographyContent = [
  {
    id: 'intro',
    content: `Abass Ben Cheik, who goes by the name Abass Dev, is a talented full-stack developer with a passion for building exceptional Web and Mobile applications. He was born in Niamey, Niger, on February 2, 1994. He is currently ${birthday(new Date('02-02-1994'))}`
  },
  {
    id: 'early-years',
    content: "At a young age of 15 in 2009, Abass Dev became fascinated with the world of web development. However, he had no idea where to start. It wasn't until he met a friend on Skyrock, a social networking site, in 2011, that he was introduced to the world of blogging and tasked with administering a Wix-created blog. It was this experience that sparked his curiosity and ignited his passion for web development."
  },
  {
    id: 'growth',
    content: 'In 2012, Abass Dev created his first blog on the Blogspot platform, but soon discovered its limitations. Determined to expand his knowledge and capabilities, he began to explore the depths of web development using languages such as HTML, CSS, JavaScript, PHP, SQL, and others.'
  },
  {
    id: 'development',
    content: 'With his dedication and hard work, Abass Dev honed his skills and became a self-taught full-stack developer.'
  },
  {
    id: 'portfolio',
    content: 'Today, he has an impressive portfolio of work that showcases his expertise in building dynamic, responsive, and visually appealing web applications.'
  },
  {
    id: 'skills',
    content: 'In addition to his technical abilities, Abass Dev has a keen eye for design and aesthetics, which allows him to create stunning and functional user interfaces. He is always learning and staying up-to-date with the latest trends and technologies in the ever-evolving field of web development.'
  },
  {
    id: 'conclusion',
    content: 'Abass Dev is a true testament to the power of self-education and perseverance. His passion and commitment to his craft have led him to become a respected figure in the web development community, and a source of inspiration for aspiring developers around the world.'
  }
];


const MyStory = () => {
  return (
    <article className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-20 pb-10">
        <header className="max-w-4xl mx-auto mb-12">
          <h1 className={`font-orbitron text-4xl mb-12 md:text-5xl text-center lg:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent`}>
            About Me
          </h1>
          <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500" />
            <img
              src="/assets/images/about.webp"
              alt="Portrait of Abass Dev - Full Stack Developer"
              className="w-full h-auto object-cover relative z-10"
              width={1200}
              height={675}
              loading="eager"
            />
          </div>
        </header>

        <main className="max-w-4xl mx-auto">
          <section
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8"
            aria-labelledby="bio-title"
          >
            <h2
              id="bio-title"
              className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Who is Abass Dev?
            </h2>

            <div className="space-y-6">
              {biographyContent.map((section) => (
                <p
                  key={section.id}
                  className="text-gray-700 dark:text-gray-100 text-lg leading-relaxed"
                >
                  {section.content}
                </p>
              ))}
            </div>
          </section>

          <div className="mt-8">
            <Responsive />
          </div>
        </main>
      </div>

      <Report report="my-story/page" />
    </article>
  );
};

export default MyStory;