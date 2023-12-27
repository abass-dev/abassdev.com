"use client";

import localFont from "next/font/local";
import { useEffect, useState } from "react";
import {
  IoMdArrowDropdownCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
const EduNSWACTFoundation = localFont({
  src: "../fonts/Edu_NSW_ACT_Foundation/static/EduNSWACTFoundation-Bold.ttf",
});

interface listProps {
  title: string;
  desk: string;
  open?: boolean;
}

const List = ({ title, desk, open }: listProps) => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (open) {
      setDisplay(true);
    }
  }, []);

  return (
    <div
      className={`${
        display ? "bg-gray-200 dark:text-gray-800" : ""
      } mx-5 shadow dark:text-gray-200 hover:bg-gray-200 dark:hover:text-gray-800`}
    >
      <div
        onClick={() => setDisplay(!display)}
        className="flex cursor-pointer gap-2 p-3 justify-start items-center "
      >
        {display ? (
          <>
            <div className="w-2 bg-green-600 h-10"></div>
            <IoMdArrowDropdownCircle size={25} className="text-sky-600" />
          </>
        ) : (
          <IoMdArrowDroprightCircle size={25} className="text-sky-600" />
        )}

        <p className="text-xl">{title}</p>
        <div className="h-10"></div>
      </div>
      {display && (
        <div className="py-5 px-10 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 shadow ">
          {desk}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="flex justify-center mt-10 mb-20">
      <div className="w-5/6 bg-white shadow dark:bg-gray-800">
        <div className="p-10">
          <h2
            className={`${EduNSWACTFoundation.className} text-gray-700  dark:text-gray-300 text-3xl md:text-4xl pb-10`}
          >
            FAQ's (Frequently Asked Questions)
          </h2>
          <List
            open={true}
            title="Which operating system do I use?"
            desk="I primarily use WSL, which stands for Windows Subsystem for Linux, with Kali Linux as my operating system. WSL allows me to run a Linux distribution alongside my Windows environment, providing me with the flexibility and tools of Linux while still using Windows as the host operating system."
          />
          <List
            title="What programming language do I mostly used?"
            desk="PHP and JavaScript are the programming languages I use most frequently."
          />
          <List
            title="What code editor do I mostly used?"
            desk="Visual Studio Code (VSCode) is my most used code editor, and here's why: It's free, powerful, customizable, works on multiple platforms, has an integrated terminal, offers intelligent code assistance, and has a thriving community."
          />
          <List
            title="What is my favorite Web browser?"
            desk="Tor and Chrome are my favorite Web browsers for browsing and development environnement "
          />
          <List
            title="What is my current development environment?"
            desk="BRAND: Dell,
            PROCESSOR: Intel Core i7,
            RAM: 16GB,
            OPERATING SYSTEM: Windows 11,
            STORAGE CAPACITY: 256GB,
            STORAGE TYPE: SSD"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
