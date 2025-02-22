"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import { birthday } from '../../helpers';
import { Responsive } from '@/utils';
import Report from '../Report';
import Image from 'next/image';

const MyStory = () => {
  const t = useTranslations("myStory");

  return (
    <article className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-20 pb-10">
        <header className="max-w-4xl mx-auto mb-12">
          <h1 className={`font-orbitron text-4xl mb-12 md:text-5xl text-center lg:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent`}>
            {t('aboutMe')} {/* Using translation */}
          </h1>
          <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500" />
            <Image
              src="/assets/images/about.webp" // Path relative to the public folder
              alt={t('whoIsAbassDev')}
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAD8D+JaQAA3AA/uVQAAA="
              className="w-full h-auto object-cover relative z-10"
              width={1200}
              height={675}
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
              {t('whoIsAbassDev')} {/* Using translation */}
            </h2>

            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-100 text-lg leading-relaxed">
                {t('intro', { birthday: birthday(new Date('02-02-1994')) })} {/* Dynamic birthday */}
              </p>
              <p className="text-gray-700 dark:text-gray-100 text-lg leading-relaxed">
                {t('earlyYears')}
              </p>
              <p className="text-gray-700 dark:text-gray-100 text-lg leading-relaxed">
                {t('growth')}
              </p>
              <p className="text-gray-700 dark:text-gray-100 text-lg leading-relaxed">
                {t('development')}
              </p>
              <p className="text-gray-700 dark:text-gray-100 text-lg leading-relaxed">
                {t('portfolio')}
              </p>
              <p className="text-gray-700 dark:text-gray-100 text-lg leading-relaxed">
                {t('skills')}
              </p>
              <p className="text-gray-700 dark:text-gray-100 text-lg leading-relaxed">
                {t('conclusion')}
              </p>
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
