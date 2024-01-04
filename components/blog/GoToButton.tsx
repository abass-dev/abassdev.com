"use client";
import { useRouter } from "next/navigation";

const GoToButton = ({
  category,
  slug,
  children,
}: {
  category: any;
  slug: any;
  children: React.ReactNode;
}) => {
  const router = useRouter();

  const clickHandler = () => {
    router.push(`/blog/${category}/${slug}`);
  };
  return (
    <div
      className="text-gray-700 underline cursor-pointer hover:text-gray-900"
      onClick={clickHandler}
    >
      {children}
    </div>
  );
};

export default GoToButton;
