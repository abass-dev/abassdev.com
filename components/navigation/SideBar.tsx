"use client";

import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdFolder } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import Link from "next/link";
import ThemeToggle from "../ui/theme-toggle";
import Image from "next/image";
import {
  BsBugFill,
  BsCodeSlash,
  BsGlobeEuropeAfrica,
  BsPass,
  BsQuestionCircleFill,
} from "react-icons/bs";
import { useTheme } from "next-themes";

const SideBar = () => {
  const { theme, setTheme } = useTheme();
  const [ThemeText, setThemeText] = useState("Light");

  useEffect(() => {
    setThemeText(theme === "dark" ? "Light" : "Dark");
  }, [theme]);

  const menus = [
    { name: "Projects", link: "/projects", icon: MdFolder },
    { name: "Repo Inspector", link: "/repo-inspector", icon: BsBugFill },
    { name: "Snippets", link: "/snippets", icon: BsCodeSlash },
    {
      name: "My Story",
      link: "/my-story",
      icon: BsPass,
      margin: true,
    },
    {
      name: "Blog",
      link: "/blog",
      icon: BsGlobeEuropeAfrica,
    },
    {
      name: "Contact Me",
      link: "/contact",
      icon: FiMessageSquare,
    },
    {
      name: ThemeText,
      link: "javasript:void(0)",
      icon: ThemeToggle,
      margin: true,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <section className="flex fixed overflow-x-hidden z-50 gap-6 max-h-screen">
      <div
        className={`bg-transparent backdrop-blur ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-800 dark:text-gray-100 px-4`}
      >
        <div className="flex min-w-full justify-between">
          <div className={`${open ? "block py-3" : "w-0"} duration-500`}>
            <Link href="/" className="flex items-center">
              {open && <span className="text-2xl">{`{`}</span>}
              <Image
                onClick={() => {
                  open && setOpen(false);
                }}
                className="rounded-xl"
                width={25}
                height={25}
                src="/assets/images/logo.webp"
                alt="Abass Dev Logo"
              />
              {open && <span className="text-2xl">{`}`}</span>}
            </Link>
          </div>

          <div className="py-3">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              onClick={() => open && setOpen(false)}
              href={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:text-gray-100 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 7}0ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideBar;
