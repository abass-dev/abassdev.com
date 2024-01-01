import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface HeaderLink {
  url: string;
  icon: React.ReactNode;
}

interface SeeMore {
  before?: string;
  after?: string;
  url?: string;
  text?: string;
}

interface ItemProps {
  name: string;
  description: string;
  headerImg: string;
  seeMore?: SeeMore;
  techs: string[];
  headerLinks?: {
    github: HeaderLink;
  };
}

const Item = ({
  name,
  headerImg,
  description,
  seeMore,
  techs,
  headerLinks,
}: ItemProps) => {
  return (
    <div className="bg-white dark:text-gray-100 dark:bg-gray-800 mb-8 overflow-hidden rounded shadow-lg dark:shadow-slate-900">
      <Image
        quality={75}
        className="w-full hover:scale-110"
        src={headerImg}
        width={640}
        height={360}
        alt={name}
      />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        {headerLinks && (
          <div className="divide-bottom py-3 flex gap-2 mb-3">
            {headerLinks.github && (
              <a
                className="flex gap-2 bg-gray-200 px-1 rounded text-gray-700 items-center button text-sm"
                href={headerLinks.github.url}
              >
                <span>Code source</span> {headerLinks.github.icon}
              </a>
            )}
          </div>
        )}
        <p className="text-black dark:text-gray-100 text-lg">{description}</p>
        <br />
        {seeMore && (
          <p>
            {seeMore.before}
            <a className="text-blue-700" href={seeMore.url}>
              {" "}
              {seeMore.text}
            </a>{" "}
            {seeMore.after}
          </p>
        )}
      </div>
      <div className="px-6 pt-4 pb-2">
        {techs.map((value, index) => {
          return (
            <span
              key={index}
              className="inline-block bg-gray-200 hover:bg-blue-500 hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{value}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Item;
