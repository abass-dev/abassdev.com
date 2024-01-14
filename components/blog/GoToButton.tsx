"use client";
import { useRouter } from "next/navigation";

const GoToButton = ({
  slug,
  className,
  children,
}: {
  slug?: any;
  className: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();

  const clickHandler = () => {
    router.push(`/blog/posts/${slug}`);
  };
  return (
    <div className={`${className}`} onClick={clickHandler}>
      {children}
    </div>
  );
};

export default GoToButton;
