import React from "react";

interface itemProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const Item = ({ icon, title, desc }: itemProps) => {
  return (
    <div className="max-w-lg hover:scale-110 hover:bg-green-100  hover:shadow-md mb-8 p-8 bg-white dark:bg-gray-800 shadow-lg dark:shadow-slate-900 flex items-center flex-col justify-center">
      {icon}
      <h1 className="text-3xl py-4">{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default Item;
