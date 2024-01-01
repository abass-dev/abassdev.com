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

const Orbitron = localFont({
  src: "../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

function ReactNativeSnippets() {
  const [data, setData] = useState<PostItem[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [message, setMessage] = useState<string | undefined>();
  const cacheData = getCacheWithExpirationDate("snippets-react-native");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (cacheData) {
          setData(cacheData);
          setLoading(false);
        } else {
          const response = await axios.get(API.REACT_NATIVE_SNIPPET);
          setData(response.data);
          setLoading(false);
          setCacheWithExpirationDate(
            "snippets-react-native",
            response.data,
            1440
          );
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
    <div className="flex justify-center dark:text-gray-100 dark:bg-gray-900 pb-10">
      <div className="w-4/5 container mx-auto pt-32 lg:pt-10">
        <div className="grid pb-20 place-items-center">
          <h1
            className={`${Orbitron.className}  font-bold  dark:text-white text-3xl md:text-5xl pb-8 my-4 text-blue-950`}
          >
            React Native Code Snippets
          </h1>
          <p className="font-normal dark:text-white text-gray-700">
            Easily improve your skills with React Native code snippets
          </p>
        </div>
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
  );
}

export default ReactNativeSnippets;
