const CategoryButton = ({ category, children, className }: any) => {
  return (
    <a className={`${className}`} href={`/blog/posts/category/${category}`}>
      {children}
    </a>
  );
};

export default CategoryButton;
