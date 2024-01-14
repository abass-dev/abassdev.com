"use client";

import { useRouter } from "next/navigation";

const CategoryButton = ({ category, children, className }: any) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blog/posts/category/${category}`);
  };

  return (
    <div className={`${className}`} onClick={handleClick}>
      {children}
    </div>
  );
};

export default CategoryButton;
