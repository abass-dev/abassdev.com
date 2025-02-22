'use client';

import { useTranslations } from "next-intl";
import ContactForm from "./contact/Form";
import buildInfo from "../build-info.json";
import packageJson from "../package.json";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Responsive from "@/utils/googleADS/Responsive";
import { FacebookIcon, GithubIcon, TwitterIcon, MailIcon, ArrowRightCircle } from "lucide-react";
import React from 'react';
import LastUpdateDisplay from "@/utils/LastUpdateDisplay";

interface ImportantLinksProps {
  href: string;
  text: string;
}

const ImportantLinks: React.FC<ImportantLinksProps> = ({ href, text }) => {
  return (
    <li className="mb-2 hover:text-gray-600 dark:hover:text-gray-400">
      {href.startsWith('/') ? (
        <Link href={href} className="flex text-lg gap-2 items-center">
          <ArrowRightCircle /> {text}
        </Link>
      ) : (
        <a className="flex text-lg gap-2 items-center" href={href}>
          <ArrowRightCircle /> {text}
        </a>
      )}
    </li>
  );
};

export const Footer: React.FC = () => {
  const t = useTranslations("footer");
  const pathname = usePathname();
  const appVersion = packageJson.version;

  return (
    <div className="text-gray-800 dark:text-white bg-gray-100 dark:bg-black py-8">
      <div className="container mx-auto grid grid-cols-4 gap-10 px-8 md:px-20">
        {pathname !== "/contact/" && (
          <div className="col-span-4 md:col-span-2">
            <ContactForm />
          </div>
        )}

        <div
          className={`col-span-4 text-center text-gray-600 dark:text-gray-300 ${pathname === "/contact/" ? "md:-col-span-4" : "md:col-span-2"
            }`}
        >
          <h2 className="font-edu-nsw mb-3 text-3xl text-gray-800 dark:text-white">
            {t("whatsNext.title")}
          </h2>
          <h3 className="text-2xl mb-3 text-gray-700 dark:text-gray-200">
            {t("whatsNext.subtitle")}
          </h3>
          <p className="first-letter:text-5xl">
            {t("whatsNext.description")}
          </p>
          <div className="flex gap-3 pt-8 justify-center items-center">
            <a aria-label="Github account" href="https://github.com/abass-dev" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <GithubIcon size={25} />
            </a>
            <a aria-label="Twitter account" href="https://twitter.com/abass_dev" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <TwitterIcon size={25} />
            </a>
            <a aria-label="Facebook account" href="https://m.facebook.com/abassthedev" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <FacebookIcon size={25} />
            </a>
            <a aria-label="Email address" href="/contact/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <MailIcon size={25} />
            </a>
          </div>
          <div className="py-3 mt-5">
            <h3 className="py-5 text-3xl text-gray-800 dark:text-white">
              {t("otherLinks.title")}
            </h3>
            <ul className="grid grid-cols-2 place-items-center">
              <ImportantLinks href="https://apps.abassdev.com" text="WebUtilityX" />
              <ImportantLinks href="https://orh.vercel.com" text="Orh" />
              <ImportantLinks href="/projects/" text={t("otherLinks.projects")} />
              <ImportantLinks href="https://abassdev.com/blog" text={t("otherLinks.blog")} />
              <ImportantLinks href="/my-story/" text={t("otherLinks.aboutMe")} />
              <ImportantLinks href="/contact/" text={t("otherLinks.contactMe")} />
              <ImportantLinks href="/privacy-policy" text={t("otherLinks.privacyPolicy")} />
              <ImportantLinks href="/copyright/" text={t("otherLinks.copyright")} />
            </ul>
          </div>
        </div>

        <div className="text-center text-lg text-gray-600 dark:text-gray-300 col-span-4">
          <p className="mb-2">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
          <p>{t("currentVersion", { version: appVersion })}</p>
          <LastUpdateDisplay />
        </div>
        <Responsive />
      </div>
    </div>
  );
};