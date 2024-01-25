import Link from "next/link";

const CategoryButton = ({ category, children, className }: any) => {
  return (
    <Link className={`${className}`} href={`/blog/posts/category/${category}`}>
      {children}
    </Link>
  );
};

export default CategoryButton;
