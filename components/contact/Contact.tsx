"use client";

import { usePathname } from "next/navigation";
import Form from "./Form";
import { Report } from "../";

import localFont from "next/font/local";
const Orbitron = localFont({
  src: "../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

const Contact = () => {
  const pathName = usePathname();
  return (
    <div className="dark:text-gray-100 dark:bg-gray-900">
      <div className={`container mx-auto px-10 md:px-20 pt-32 lg:pt-10 pb-10`}>
        <h1
          className={`${Orbitron.className} text-center font-bold  dark:text-white text-3xl md:text-5xl pb-10 my-4 text-blue-950`}
        >
          Contact Me
        </h1>
        <div className="">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="">
              <h1 className="text-3xl">Abass Dev</h1>
              <br />
              <p>Web and mobile app developer at self-employed.</p>
              <br />
              <p>Niamey, Niger</p>
              <br />
              <p>
                Email:{" "}
                <a className="text-blue-700" href="mailto:abass@abassdev.com">
                  abass@abassdev.com
                </a>
              </p>
              <br />
              <p>
                {" "}
                Phone:{" "}
                <a className="text-blue-700" href="tel:+233598208469">
                  +233 59 820 8469
                </a>
              </p>
            </div>
            <Form />
          </div>
        </div>
      </div>
      <Report report="contact/page" />
    </div>
  );
};
export default Contact;
