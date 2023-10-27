import React from "react";

interface itemProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const Item = ({ icon, title, desc }: itemProps) => {
  return (
    <div className="box-shadow p-5 rounded flex items-center gap-8 flex-col justify-center">
      {icon}
      <h1 className="text-gray-700 text-3xl py-4">{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default Item;
