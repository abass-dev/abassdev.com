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
    <a className={className} href={`/blog/posts/${slug}`}>
      {children}
    </a>
  );
};

export default GoToButton;
