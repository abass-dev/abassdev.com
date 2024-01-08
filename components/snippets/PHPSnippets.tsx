// @ts-ignore
// @ts-nocheck

"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import API from "../api";

import localFont from "next/font/local";
import { LoadingBar } from "../../components/ui";
import {
  getCacheWithExpirationDate,
  setCacheWithExpirationDate,
} from "../helpers/getCacheWithExpirationDate";
import PostItem from "./helpers/PostItem";
import { Report } from "..";

const Orbitron = localFont({
  src: "../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

function PHPSnippets() {
  const [data, setData] = useState<PostItem[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [message, setMessage] = useState<string | undefined>();

  const cacheData = getCacheWithExpirationDate("snippets-php");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (cacheData) {
          setData(cacheData);
          setLoading(false);
        } else {
          const response = await axios.get(API.PHP_SNIPPET);
          setData(response.data);
          setLoading(false);
          setCacheWithExpirationDate("snippets-php", response.data, 1440);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
        setMessage(
          "OOPS! Something went wrong. Please refresh this page to try again."
        );
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="dark:text-gray-100 dark:bg-gray-900 pb-10">
        <div className="min-h-[50vh] flex flex-col justify-center bg-white dark:text-gray-100 dark:bg-gray-900 pb-20 text-center  pt-32 lg:pt-10">
          <h1
            className={`${Orbitron.className}  font-bold  dark:text-white text-3xl md:text-5xl pb-4 text-blue-950`}
          >
            PHP Code Snippets
          </h1>
          <p className="font-normal dark:text-white text-gray-700">
            Easily improve your skills with PHP code snippets
          </p>
        </div>
        <div className="mx-4 md:mx-10 lg:mx-32">
          <div className="grid gap-8">
            {loading && (
              <div className="text-center">
                <LoadingBar />
                <p>Please wait..</p>
              </div>
            )}
            {loading === false && message && (
              <div className="text-center text-red-500">{message}</div>
            )}

            {loading === false && message === undefined && data && (
              <>
                <PostItem data={data} />
              </>
            )}
          </div>
        </div>
      </div>
      <Report report="snippets/php/page" />
    </>
  );
}

export default PHPSnippets;
