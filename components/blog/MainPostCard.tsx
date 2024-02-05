import { FaFolderOpen, FaUser } from "react-icons/fa";
import GoToButton from "./GoToButton";
import { dateToReadable } from "@/helpers";
import { SlDislike, SlLike } from "react-icons/sl";
import CategoryButton from "./CategoryButton";
import AuthorPostsButton from "./AuthorPostsButton";
import TagsButton from "./TagsButton";
import { FiArrowRight } from "react-icons/fi";
import ShareLinks from "./ShareLinks";
import PostLectureDuration from "./PostLectureDuration";
import PostLevel from "./lib/utils/postLevel";

const MainPostCard = ({ posts }: any) => {
  return (
    <div className="flex flex-col">
      {posts &&
        posts.map((post: any) => {
          return (
            <article
              className="bg-gray-100 dark:bg-gray-900/70 shadow-md rounded p-4 mb-5"
              key={post.id}
            >
              <div className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time dateTime={post.created_at}>
                  {dateToReadable(post.created_at)}
                </time>
              </div>
              <div>
                <GoToButton
                  className="text-2xl inline-block font-bold leading-8 tracking-tight  cursor-pointer"
                  slug={post.slug}
                >
                  <h1 className="text-blue-600 hover:text-blue-800">
                    {post.title}
                  </h1>
                </GoToButton>
                <div className="flex items-center mt-2 gap-3">
                  <TagsButton
                    className="flex gap-2 justify-center items-center"
                    tag={post.tag_names}
                  />
                  {" | "}
                  <PostLevel level={post.level} />
                </div>
                <div className="text-lg text-gray-700 dark:text-gray-400 mt-5">
                  {post.description}
                  <GoToButton
                    className="text-pink-700 hover:text-pink-400 mt-3  cursor-pointer"
                    slug={post.slug}
                  >
                    <div className="flex items-center gap-2">
                      Read more <FiArrowRight />
                    </div>
                  </GoToButton>
                </div>
                <div className="flex flex-col md:flex-row gap-10 justify-between mt-5">
                  <div className="md:flex text-sky-700 gap-5">
                    <AuthorPostsButton
                      authorName={post.author_username}
                      className="flex items-center gap-2  hover:text-sky-400"
                    >
                      <FaUser />
                      <p className="capitalize ">{post.author_username}</p>
                    </AuthorPostsButton>

                    <CategoryButton
                      className="flex items-center cursor-pointer gap-2  hover:text-sky-400"
                      category={post.category}
                    >
                      <FaFolderOpen />
                      <p className="capitalize">{post.category}</p>
                    </CategoryButton>
                    <PostLectureDuration content={post.body} />
                  </div>
                  <div className="flex gap-5 justify-between dark:border-gray-600 border-t-2 md:border-0 pt-2">
                    <div className="flex gap-2 p-1">
                      <p>{post.like_count}</p>
                      <SlLike
                        className="text-blue-400 cursor-not-allowed"
                        size={20}
                      />
                      <p>{post.dislike_count}</p>
                      <SlDislike
                        className="text-red-400 cursor-not-allowed"
                        size={20}
                      />
                    </div>
                    <ShareLinks post={post} />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
    </div>
  );
};

export default MainPostCard;
