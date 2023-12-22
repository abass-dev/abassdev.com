"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import Others from "./Others";
import { RiMenu3Fill } from "react-icons/ri";
import ScrollProgress from "../ui/ScrollProgress";
import ThemeToggle from "../ui/theme-toggle";
import Snippets from "./Snippets";
const Exo = localFont({
  src: "../../fonts/Exo_2/Exo2-VariableFont_wght.ttf",
});

const MainNav = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    // Check if the user is scrolling down and the navbar is open
    if (prevScrollPos < currentScrollPos && isOpen) {
      setIsOpen(false);
    }

    // Check if the user is scrolling up
    if (prevScrollPos > currentScrollPos && isOpen) {
      setIsOpen(false);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const openNavHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`${
        isOpen && "h-64 md:h-auto overflow-auto link-anime"
      } backdrop-blur md:bg-white/10 z-50 bg-white/30 shadow-md border-gray-200 fixed w-full dark:bg-gray-900`}
    >
      <div className="xl:container xl:my-auto transition-all ease-in-out duration-300 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="text-2xl">{`{`}</span>
          <Image
            className="rounded-xl"
            width={40}
            height={40}
            src="/assets/images/logo.webp"
            alt="Abass Dev Logo"
          />
          <span className="text-2xl">{`}`}</span>
        </Link>
        <div className="flex md:order-2">
          <div className="relative">
            <ThemeToggle />
          </div>

          <button
            onClick={openNavHandler}
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none  focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <RiMenu3Fill size={25} />
          </button>
        </div>
        <div
          className={`${
            isOpen ? "" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul
            className={`${Exo.className} uppercase backdrop-blur bg-white/10 flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
          >
            <li>
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="/projects"
                className={`${
                  pathName === "/projects/"
                    ? "md:text-blue-700 bg-blue-700 text-white md:dark:text-blue-500"
                    : ""
                }  md:hover:text-blue-500 a-link block py-2 pl-3 pr-4 font-bold rounded md:bg-transparent  md:p-0`}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="/my-story"
                className={`${
                  pathName === "/my-story/"
                    ? "md:text-blue-700 bg-blue-700 text-white md:dark:text-blue-500"
                    : ""
                } md:hover:text-blue-500 a-link block py-2 pl-3 pr-4 font-bold rounded md:bg-transparent  md:p-0`}
              >
                My story
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="/repo-inspector"
                className={`${
                  pathName === "/repo-inspector/"
                    ? "md:text-blue-700 bg-blue-700 text-white md:dark:text-blue-500"
                    : ""
                } md:hover:text-blue-500 a-link block py-2 pl-3 pr-4 font-bold rounded md:bg-transparent  md:p-0`}
              >
                Repo Inspector
              </Link>
            </li>
            <Snippets />
            <Others />
            <li>
              <Link
                onClick={() => setIsOpen(!isOpen)}
                href="/contact"
                className={`${
                  pathName === "/contact/"
                    ? "md:text-blue-700  bg-blue-700 text-white md:dark:text-blue-500"
                    : ""
                } md:hover:text-blue-500 a-link block py-2 pl-3 pr-4 rounded font-bold md:bg-transparent  md:p-0`}
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="https://byteteachers.com"
                className={`md:hover:text-blue-500 block a-link py-2 pl-3 pr-4 rounded font-bold md:bg-transparent  md:p-0`}
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ScrollProgress />
    </nav>
  );
};

export default MainNav;
