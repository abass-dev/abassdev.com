import { useState } from "react";
import localFont from "next/font/local";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Exo = localFont({
  src: "../../fonts/Exo_2/Exo2-VariableFont_wght.ttf",
});

const Others = () => {
  const [isOpen, setisOpen] = useState(false);
  const pathName = usePathname();

  const openNavHandler = () => {
    setisOpen(!isOpen);
  };

  return (
    <li>
      <button
        onClick={openNavHandler}
        id="dropdownNavbarLink"
        data-dropdown-toggle="dropdownNavbar"
        className={`${Exo.className} uppercase font-bold flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
      >
        Others{" "}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="dropdownNavbar"
        className={`${
          isOpen ? "" : "hidden"
        } z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-400"
          aria-labelledby="portfolioDropdown"
        >
          <li>
            <a
              href="/repo-inspector"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Repo Inspector
            </a>
          </li>
          <li>
            <a
              href="/copyright"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Copyright
            </a>
          </li>
          <li>
            <a
              href="/privacy-policy"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Privacy policy
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Others;
