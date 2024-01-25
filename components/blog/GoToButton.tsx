import Link from "next/link";

const GoToButton = ({
  slug,
  className,
  children,
}: {
  slug?: any;
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <Link className={className} href={`/blog/posts/${slug}`}>
      {children}
    </Link>
  );
};

export default GoToButton;
