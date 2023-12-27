"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import API from "../api";
import { log } from "console";
import CodeBlock from "./CodeBlock";

import localFont from "next/font/local";

const Orbitron = localFont({
  src: "../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

type Item = {
  id: string;
  tech: string;
};

function ReactSnippets() {
  const [data, setData] = useState<Item[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/react")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data]);
  return (
    <div className="flex justify-center dark:text-gray-100 dark:bg-gray-900 pb-10">
      <div className="w-4/5 container mx-auto pt-32 lg:pt-10">
        <div className="grid pb-20 place-items-center">
          <h1
            className={`${Orbitron.className}  font-bold  dark:text-white text-3xl md:text-5xl pb-8 my-4 text-blue-950`}
          >
            React Code Snippets
          </h1>
          <p className="font-normal dark:text-white text-gray-700">
            Learn React Js from experts
          </p>
        </div>
        <div className="grid gap-8">
          <div
            style={{ maxHeight: 360 }}
            className=" grid grid-cols-2 overflow-auto backdrop-blur-sm dark:shadow-gray-950 bg-white shadow-2xl dark:bg-gray-800"
          >
            <div className="col-span-2 lg:col-span-1">
              <div className="p-5">
                <h2 className="text-4xl mb-10">Useful react js component</h2>
                <p className="text-base text-gray-400 mb-3">
                  Publish date: <span>Mon Dec 25 2023</span>
                </p>
                <p>
                  Let's break down this useful react component into pieces.
                  first of all we imported useState from react library.
                </p>
              </div>
            </div>

            <div className="col-span-2 p-5 lg:col-span-1">
              <CodeBlock
                snippetType={"html"}
                code={`
                <html>
                <p>Hello what is up</p>Hello what llo what is up</p>Hello what is up</p>Hello what is up</p>Hello what is
                is up</p>Hello what is up</p>Hello what is up</p>Hello what is up</p>Hello what is up</p>Hello what is up</p>Hello what is
                is up</p>Hello what is up</p>Hello what is up</p>Hello what is up</p>Hello what is up</p>Hello what is up</p>Hello what is
                is up</p>Hello what is up</p>Hello what is up</p>Hello what is up</p>Hello what is up</p>Hello what is up</p>Hello what is
                is up</p>Hello what is up</p>Hello what is up</p>Hello what is up</p>Hello what is up</p>Hello what is up</p>Hello what is
                is up</p>Hello what is up</p>Hello what is up</p>Hello what is up</p>Hello what is up</p>Hello what is up</p>Hello what is
                is up</p>Hello what is up</p>Hello what is up</p>Hello what is up</p>Hello what is up</p>Hello what is up</p>Hello what is
                 up</p>Hello what is up</p>Hello what is up</p></html>`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactSnippets;
