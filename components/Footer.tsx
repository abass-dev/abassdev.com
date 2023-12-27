"use client";
import ContactForm from "./contact/Form";
import { BsGithub, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import buildInfo from "../build-info.json";
import packageJson from "../package.json";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";
const EduNSWACTFoundation = localFont({
  src: "../fonts/Edu_NSW_ACT_Foundation/static/EduNSWACTFoundation-Bold.ttf",
});
const appVersion = packageJson.version;

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
          className={`col-span-4 text-center text-gray-300 ${
            pathname === "/contact/" ? "md:-col-span-4" : "md:col-span-2"
          }`}
        >
          <h2 className={`${EduNSWACTFoundation.className} mb-3 text-3xl`}>
            What's next?
          </h2>
          <h3 className="text-2xl mb-3">Let's connect</h3>
          <p className="first-letter:text-5xl">
            If you have any suggestion, feedback, opportunity, or are interested
            in collaborating on a project, we would love to hear from you!
            Please feel free to reach out to us using the contact details
            provided below. If you are expecting a reply, kindly mention your
            contact details in your message.
          </p>
          <div className="flex gap-3 pt-8 justify-center items-center">
            <a aria-label="Github account" href="https://github.com/abass-dev">
              <BsGithub size={25} />
            </a>
            <a
              aria-label="Twitter account"
              href="https://twitter.com/abass_dev"
            >
              <BsTwitter size={25} />
            </a>
            <a
              aria-label="Facebook account"
              href="https://m.facebook.com/abassthedev"
            >
              <BsFacebook size={25} />
            </a>
            <a aria-label="Email address" href="/contact/">
              <MdEmail size={25} />
            </a>
          </div>
          <div className="py-3 mt-5">
            <h3 className="py-3 text-3xl">Other Links</h3>
            <ul className="list-disc inline-block">
              <li className="mb-2 hover:text-gray-500">
                <a href="/privacy-policy/">Privacy Policy</a>
              </li>
              <li className="mb-2 hover:text-gray-500">
                <a href="/copyright/">Copyright</a>
              </li>
              <li className="mb-2 hover:text-gray-500">
                <a href="/snippets/">Snippets</a>
              </li>
              <li className="mb-2 hover:text-gray-500">
                <a href="/repo-inspector/">Repo Inspector</a>
              </li>
              <li className="mb-2 hover:text-gray-500">
                <a href="/proverbs/">Proverbs</a>
              </li>
              <li className="mb-2 hover:text-gray-500">
                <a href="/my-story/">About us</a>
              </li>
              <li className="mb-2 hover:text-gray-500">
                <a href="/contact/">Contact us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-300 col-span-4">
          <p className="mb-2">
            Copyright © 2021 - 2023 Abass Dev. All rights reserved.
          </p>
          <p> Current version: {appVersion}</p>
          <p> Last updated: {new Date(buildInfo.lastUpdate).toString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
