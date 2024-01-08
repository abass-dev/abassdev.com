"use client";
import { useRouter } from "next/navigation";

const GoToButton = ({
  category,
  slug,
  className,
  children,
}: {
  category?: any;
  slug?: any;
  className: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();

  const clickHandler = () => {
    router.push(`/blog/${category}/${slug}`);
  };
  return (
    <div className={`${className}`} onClick={clickHandler}>
      {children}
    </div>
  );
};

export default GoToButton;
