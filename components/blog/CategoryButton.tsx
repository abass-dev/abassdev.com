import Link from "next/link";

const CategoryButton = ({
  category,
  children,
  className,
}: {
  category: string;
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <Link className={`${className}`} href={`/blog/posts/category/${category}`}>
      {children}
    </Link>
  );
};

export default CategoryButton;
