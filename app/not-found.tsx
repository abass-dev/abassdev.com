import Link from "next/link";
import localFont from "next/font/local";
import { Metadata } from "next";

const Orbitron = localFont({
  src: "../fonts/Orbitron/static/Orbitron-Black.ttf",
});

export const metadata: Metadata = {
  title: "404 Not Found",
  description:
    "The page you are looking for doesn't exist. if you think something is broken. report a problem.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-800">
      <div className="container mx-auto pt-32 lg:pt-0">
        <div className="min-h-screen flex justify-center flex-col items-center">
          <div className="text-center w-3/4 py-20 px-5 bg-[#ffffffd6] shadow-lg">
            <h2
              className={`${Orbitron.className} text-5xl  lg:text-9xl inline-block bg-gradient-to-r bg-clip-text text-transparent from-blue-400 to-purple-400`}
            >
              404
            </h2>
            <p className="text-3xl my-5 text-gray-900">OPPS! PAGE NOT FOUND</p>
            <p className="text-xl text-gray-900">
              The page you are looking for doesn't exist. if you think something
              is broken. report a problem.
            </p>
            <div className="flex gap-2 mt-16 justify-evenly">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <Link href="/">RETURN HOME</Link>
              </button>
              <button className="bg-gray-900 hover:bg-white hover:text-gray-900 text-gray-100 font-semibold py-2 px-4 hover:border border-blue-500 rounded">
                <Link href="https://github.com/abass-dev/abassdev.com">
                  REPORT PROBLEM
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
