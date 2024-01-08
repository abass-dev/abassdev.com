"use client";

import { useRouter } from "next/navigation";

const CategoryButton = ({ category }: any) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blog/${category}`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      See all {category} posts
    </div>
  );
};

export default CategoryButton;
