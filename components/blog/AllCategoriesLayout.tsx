import Link from "next/link";

const AllCategoriesButton = ({ category }: any) => {
  return (
    <div>
      <Link
        href={`/blog/posts/category/${category}`}
        className="cursor-pointer font-bold ml-4 hover:text-sky-500 text-sky-700 uppercase"
      >
        {category}
      </Link>
    </div>
  );
};
const AllCategoriesLayout = ({ categories }: any) => {
  return (
    <div className="flex flex-col gap-2">
      {categories.map((category: any, index: number) => {
        return (
          <div key={index}>
            <AllCategoriesButton
              category={category.category_name}
              className="font-bold ml-4 text-gray-500  uppercase"
              key={category.id}
            >
              {category.category_name}
            </AllCategoriesButton>
          </div>
        );
      })}
    </div>
  );
};

export default AllCategoriesLayout;
