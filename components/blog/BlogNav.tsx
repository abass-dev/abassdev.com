"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import ThemeToggle from "../ui/theme-toggle";
import localFont from "next/font/local";
import BlogFooter from "./BlogFooter";
import SocialsLinks from "./SocialsLink";
const Orbitron = localFont({
  src: "../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

const BlogNav = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  const links = [
    {
      id: 1,
      name: "Home",
      href: "/blog",
    },
    {
      id: 2,
      name: "Portfolio",
      href: "/",
    },
    {
      id: 3,
      name: "About",
      href: "/my-story",
    },
    {
      id: 4,
      name: "Contact",
      href: "/contact",
    },
    {
      id: 5,
      name: "Privacy Policy",
      href: "/privacy-policy",
    },
  ];
  const openNav = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      const sidebar = document.getElementById("sidebar");
      const openSidebarButton = document.getElementById("open-sidebar");

      if (
        !sidebar?.contains(e.target) &&
        !openSidebarButton?.contains(e.target)
      ) {
        sidebar?.classList.add("-translate-x-full");
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="h-screen flex overflow-hidden bg-gray-200">
        {/* Sidebar */}
        <div
          className={`${
            open ? "" : "-translate-x-full"
          } absolute bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform transform ease-in-out duration-300`}
          id="sidebar"
        >
          {/* Your Sidebar Content */}
          <div className="p-4">
            <h1
              className={`${Orbitron.className} text-xl font-semibold inline-block bg-gradient-to-r bg-clip-text text-transparent to-pink-600 from-green-600`}
            >
              Devs Blog
            </h1>
            <ul className="mt-4">
              {links.map((link) => (
                <li key={link.id} className="mb-2">
                  <Link
                    href={link.href}
                    className="block hover:text-indigo-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col  overflow-hidden">
          {/* Navbar */}
          <div className="bg-white dark:bg-gray-900 shadow">
            <div className="container mx-auto">
              <div className="flex justify-between items-center py-4 px-2">
                <Link
                  href={"/blog"}
                  className={`${Orbitron.className} text-xl font-semibold inline-block bg-gradient-to-r bg-clip-text text-transparent to-pink-600 from-green-600`}
                >
                  Devs Blog
                </Link>
                <div className="hidden md:flex gap-5">
                  <SocialsLinks />
                </div>
                <div className="flex gap-5">
                  <ThemeToggle />
                  <button
                    onClick={openNav}
                    aria-label="Side Bar"
                    className="text-gray-500 hover:text-gray-600"
                    id="open-sidebar"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Content Body */}
          <div className="flex-1 overflow-auto dark:bg-gray-800">
            {children}
            <BlogFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNav;
