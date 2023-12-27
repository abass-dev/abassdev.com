// @ts-ignore
// @ts-nocheck

import React from "react";
import localFont from "next/font/local";
const EduNSWACTFoundation = localFont({
  src: "../../fonts/Edu_NSW_ACT_Foundation/static/EduNSWACTFoundation-Bold.ttf",
});

interface itemProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const MainIcons = ({ icon }) => {
  return (
    <span className={`${icon.bg} ${icon.color} p-5 rounded-full`}>
      {icon.source}
    </span>
  );
};
const Icons = ({ key, toolIcons }) => {
  return (
    <div
      key={key}
      className={`${toolIcons.color} rounded-full hover:scale-125 border-2 p-3`}
    >
      {toolIcons.source}
    </div>
  );
};

const Item = ({ icon, title, desc, toolIcons }) => {
  return (
    <div className="max-w-lg hover:shadow-md mb-8 p-8 bg-white dark:bg-gray-800 shadow-lg dark:shadow-slate-900 flex items-center flex-col justify-center">
      <MainIcons
        icon={{ source: icon.source, color: icon.color, bg: icon.bg }}
      />

      <h1 className={`${EduNSWACTFoundation.className} text-3xl py-4`}>
        {title}
      </h1>
      <div className="flex py-4">
        {toolIcons &&
          toolIcons.map((item, index) => {
            return <Icons key={index} toolIcons={item} />;
          })}
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default Item;
