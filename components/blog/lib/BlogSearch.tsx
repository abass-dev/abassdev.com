"use client";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import GoToButton from "../GoToButton";
import { dateToReadable } from "@/helpers";

const BlogSearch = ({ posts }: { posts: any }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermLength, setSearchTermLength] = useState<
    String | undefined
  >();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchTerm.length < 3) {
      setSearchTermLength("Please enter at least 3 characters to search...");
      setSearchResults([]);
      return;
    }

    const results = posts.filter(
      (post: any) =>
        post.title.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
        post.description
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase()) ||
        post.tag_names
          .toLowerCase()
          .includes(searchTerm.trim().toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
    if (results.length === 0) {
      setSearchTermLength("No post found!");
      return;
    }
    setSearchResults(results);
  };

  return (
    <div>
      <form
        className={`flex gap-2 justify-center items-center ${
          searchTermLength ? "mb-2" : "mb-10"
        }`}
        onSubmit={handleSearch}
      >
        <input
          type="search"
          className="border border-gray-300 outline-none rounded-md p-2 w-1/2"
          placeholder="Search for a post..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTermLength(undefined);
            setSearchTerm(e.target.value);
          }}
        />
        <button className="cursor-pointer text-xl" type="submit">
          <BsSearch />
        </button>
      </form>
      {searchTermLength && (
        <p className="text-red-500 text-center  mb-10">{searchTermLength}</p>
      )}
      {searchResults.map((result: any) => {
        return (
          <div
            className="shadow-md rounded bg-white dark:bg-gray-900 p-5 m-5"
            key={result.id}
          >
            <GoToButton
              className="text-2xl inline-block font-bold leading-8 tracking-tight  cursor-pointer"
              slug={result.slug}
            >
              <div className="flex gap-2 items-center">
                <h2 className="text-blue-600 hover:text-blue-800">
                  {result.title}
                </h2>
                <span className="text-gray-700 dark:text-gray-500">
                  {" -  "}
                </span>
                <span className="text-sm text-gray-700 dark:text-gray-500">
                  {dateToReadable(result.created_at)}
                </span>
              </div>
            </GoToButton>
            <p>{result.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogSearch;
