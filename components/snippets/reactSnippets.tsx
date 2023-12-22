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
    <div className="dark:text-gray-100 dark:bg-gray-900">
      <div className="container mx-auto pt-40">
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

        <div className="grid grid-cols-2 gap-10">
          <div className="col-span-2 md:col-span-1 h-96 bg-lime-400"></div>
          <div className="col-span-2 md:col-span-1 h-96 bg-lime-900"></div>
          <div className="col-span-2 md:col-span-1 h-96 bg-slate-600"></div>
        </div>
      </div>
    </div>
  );
}

export default ReactSnippets;
