import Link from "next/link";
import Script from "next/script";
import { ReactNode } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import ThemeToggle from "../ui/theme-toggle";
import localFont from "next/font/local";
const Orbitron = localFont({
  src: "../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

const BlogNav = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-gray-100">
      <div className="h-screen flex overflow-hidden bg-gray-200">
        {/* Sidebar */}
        <div
          className="absolute bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform transform -translate-x-full ease-in-out duration-300"
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
              <li className="mb-2">
                <a href="/blog" className="block hover:text-indigo-400">
                  Home
                </a>
              </li>

              <li className="mb-2">
                <a href="/contact" className="block hover:text-indigo-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <div className="bg-white shadow">
            <div className="container mx-auto">
              <div className="flex justify-between items-center py-4 px-2">
                <Link
                  href={"/blog"}
                  className={`${Orbitron.className} text-xl font-semibold inline-block bg-gradient-to-r bg-clip-text text-transparent to-black from-green-600`}
                >
                  Devs Blog
                </Link>
                <div className="hidden md:flex gap-5">
                  <a
                    aria-label="Devs blog Facebook account"
                    href="https://m.facebook.com/abassthedev"
                  >
                    <FaFacebook className={"text-blue-600"} size={20} />
                  </a>
                  <a
                    aria-label="Devs blog Twitter account"
                    href="https://twitter.com/abass_dev"
                  >
                    {" "}
                    <FaTwitter className={"text-blue-400"} size={20} />
                  </a>
                  <a
                    aria-label="Devs Instagram account"
                    href="https://www.instagram.com/abassdev/"
                  >
                    <FaInstagram className={"text-orange-700"} size={20} />
                  </a>
                </div>
                <div className="flex gap-5">
                  <ThemeToggle />
                  <button
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Content Body */}
          <div className="flex-1 overflow-auto p-4">{children}</div>
        </div>
      </div>

      <Script id="openSideBar">
        {` const sidebar = document.getElementById('sidebar');
    const openSidebarButton = document.getElementById('open-sidebar');
    
    openSidebarButton.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('-translate-x-full');
    });

    // Close the sidebar when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !openSidebarButton.contains(e.target)) {
            sidebar.classList.add('-translate-x-full');
        }
    });`}
      </Script>
    </div>
  );
};

export default BlogNav;
