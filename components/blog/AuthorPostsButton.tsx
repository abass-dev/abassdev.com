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
    <a
      href={`/blog/posts/author/${authorName}`}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </a>
  );
};

export default AuthorPostsButton;
