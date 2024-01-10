"use client";

import { useRouter } from "next/navigation";

const AuthorPostsButton = ({
  authorName,
  className,
  children,
}: {
  authorName: string;
  className: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/blog/posts/author?name=${authorName}`)}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

export default AuthorPostsButton;
