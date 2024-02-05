import Link from "next/link";
import { FaFolderOpen } from "react-icons/fa";

const SingleCategoryButton = ({ category }: any) => {
  return (
    <div className={`cursor-pointer flex gap-2 items-center`}>
      <FaFolderOpen />
      <div>
        <Link
          href={`/blog/posts/tags/${category}`}
          className="text-pink-700 hover:text-pink-400 uppercase"
        >
          {category}
        </Link>
      </div>
    </div>
  );
};

export default SingleCategoryButton;
