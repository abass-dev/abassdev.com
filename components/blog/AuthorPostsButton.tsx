import Link from "next/link";

const AuthorPostsButton = ({
  authorName,
  className,
  children,
}: {
  authorName: string;
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={`/blog/posts/author/${authorName}`}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </Link>
  );
};

export default AuthorPostsButton;
