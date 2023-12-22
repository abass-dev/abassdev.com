import { useState } from "react";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";

const Exo = localFont({
  src: "../../fonts/Exo_2/Exo2-VariableFont_wght.ttf",
});

const Snippets = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const openNavHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="a-link">
      <button
        onClick={openNavHandler}
        id="dropdownNavbarLink"
        data-dropdown-toggle="dropdownNavbar"
        className={`${Exo.className} uppercase font-bold flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
      >
        Snippets{" "}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="dropdownNavbar"
        className={`${
          isOpen ? "" : "hidden"
        } absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-400"
          aria-labelledby="portfolioDropdown"
        >
          <li>
            <a
              href="/snippets"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              All
            </a>
          </li>
          <li>
            <a
              href="/snippets/react"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              React
            </a>
          </li>
          <li>
            <a
              href="/snippets/php"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              PHP
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Snippets;
