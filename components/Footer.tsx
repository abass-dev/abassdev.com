"use client";
import ContactForm from "./contact/Form";
import { BsGithub, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="text-white bg-gray-900 py-8">
      <div className="grid grid-cols-4 gap-20 px-5 md:px-8 md:px-20">
        <div className="col-span-4 md:col-span-2">
          <ContactForm />
        </div>

        <div className="col-span-4 text-center md:col-span-2">
          <h2 className="font-bold mb-3 text-3xl">What's next?</h2>
          <h3 className="text-2xl mb-3">Let's connect</h3>
          <p className="first-letter:text-3xl">
            If you have any suggestion, feedback, opportunity, or are interested
            in collaborating on a project, we would love to hear from you!
            Please feel free to reach out to us using the contact details
            provided below. If you are expecting a reply, kindly mention your
            contact details in your message.
          </p>
          <div className="flex gap-3 pt-8 justify-center items-center">
            <a aria-label='Github account' href="https://github.com/abass-dev">
              <BsGithub size={25} />
            </a>
            <a aria-label='Twitter account' href="https://twitter.com/abass_dev">
              <BsTwitter size={25} />
            </a>
            <a aria-label='Facebook account' href="https://m.facebook.com/abassthedev">
              <BsFacebook size={25} />
            </a>
            <a aria-label='Email address' href="/contact">
              <MdEmail size={25} />
            </a>
          </div>
          <div className="py-3">
            <h3 className="text-3xl py-3">Important Links</h3>
            <ul>
              <li>
                <a href="/my-story">My story</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center col-span-4">
          <p className="mb-2">
            Copyright © 2021 - 2023 Abass Dev. All rights reserved.
          </p>
          <p className="mb-2">Current version: 4.0.5</p>
          <p>
            Last updated: Sun Nov 12 2023 11:54:30 GMT+0000 (Greenwich Mean
            Time)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
