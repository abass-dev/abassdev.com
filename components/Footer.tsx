// @ts-ignore
// @ts-nocheck

"use client";
import ContactForm from "./contact/Form";
import buildInfo from "../build-info.json";
import packageJson from "../package.json";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Responsive from "@/utils/googleADS/Responsive";
import { FacebookIcon, LucideGithub, TwitterIcon, LucideLink2, ArrowRightIcon, MailIcon, ArrowRightCircle, GithubIcon } from "lucide-react";

const appVersion = packageJson.version;

const ImportantLinks = ({ href, text }) => {

  return (
    <li className="mb-2 hover:text-gray-500">
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

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className=" text-white text-xl bg-gray-900 py-8">
      <div className="container mx-auto grid grid-cols-4 gap-10 px-8 md:px-20">
        {pathname !== "/contact/" && (
          <div className="col-span-4 md:col-span-2">
            <ContactForm />
          </div>
        )}

        <div
          className={`col-span-4 text-center text-gray-300 ${pathname === "/contact/" ? "md:-col-span-4" : "md:col-span-2"
            }`}
        >
          <h2 className={`font-edu-nsw mb-3 text-3xl`}>
            What's next?
          </h2>
          <h3 className="text-2xl mb-3">Let's connect</h3>
          <p className="first-letter:text-5xl">
            If you have any opportunity, suggestion or feedback we would love to hear from you!
            Please feel free to reach out to us using the contact form or our email address.
          </p>
          <div className="flex gap-3 pt-8 justify-center items-center">
            <a aria-label="Github account" href="https://github.com/abass-dev">
              <GithubIcon size={25} />
            </a>
            <a
              aria-label="Twitter account"
              href="https://twitter.com/abass_dev"
            >
              <TwitterIcon size={25} />
            </a>
            <a
              aria-label="Facebook account"
              href="https://m.facebook.com/abassthedev"
            >
              <FacebookIcon size={25} />
            </a>
            <a aria-label="Email address" href="/contact/">
              <MailIcon size={25} />
            </a>
          </div>
          <div className="py-3 mt-5">
            <h3 className="py-5 text-3xl">Other Links</h3>
            <ul className="grid grid-cols-2 place-items-center">
              <ImportantLinks href="https://apps.abassdev.com" text="Web Apps" />
              <ImportantLinks href="https://abassdev.com/blog" text="Blog" />
              <ImportantLinks href="/my-story/" text="About Me" />
              <ImportantLinks href="/contact/" text="Contact Me" />
              <ImportantLinks href="/privacy-policy" text="Privacy Policy" />
              <ImportantLinks href="/copyright/" text="Copyright" />
            </ul>
          </div>
        </div>

        <div className="text-center text-lg text-gray-300 col-span-4">
          <p className="mb-2">
            Copyright © 2021 - {new Date().getFullYear()} Abass Dev. All rights
            reserved.
          </p>
          <br />
          <p> Current version: {appVersion}</p>
          <br />
          <p> Last updated: {new Date(buildInfo.lastUpdate).toString()}</p>
        </div>
        <Responsive />
      </div>
    </div>
  );
};

export default Footer;
