import {
  FaFacebook,
  FaFolderOpen,
  FaTwitter,
  FaUser,
  FaWhatsappSquare,
} from "react-icons/fa";
import GoToButton from "./GoToButton";
import { dateToReadable } from "@/helpers";
import { SlDislike, SlLike } from "react-icons/sl";
import CategoryButton from "./CategoryButton";
import AuthorPostsButton from "./AuthorPostsButton";
import TagsButton from "./TagsButton";
import { BsArrowBarRight } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

const MainPostAction = ({ posts }: any) => {
  return (
    <div className="flex flex-col">
      {posts &&
        posts.map((post: any) => {
          return (
            <div
              className="bg-gray-100 shadow-md rounded p-4 mb-5"
              key={post.id}
            >
              <div className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time dateTime={post.created_at}>
                  {dateToReadable(post.created_at)}
                </time>
              </div>
              <div>
                <GoToButton
                  className="text-2xl inline-block font-bold leading-8 tracking-tight underline hover:text-gray-900 cursor-pointer"
                  slug={post.slug}
                >
                  <h1 className="">{post.title}</h1>
                </GoToButton>
                <div className="flex items-center mt-2 gap-2">
                  <TagsButton
                    className="flex gap-2 justify-center items-center"
                    tags={post.tags_names}
                  />
                </div>
                <div className="text-lg mt-5">
                  {post.short_description}
                  <GoToButton
                    className="text-pink-700 mt-3  cursor-pointer"
                    slug={post.slug}
                  >
                    <div className="flex items-center  gap-2">
                      Read more <FiArrowRight />
                    </div>
                  </GoToButton>
                </div>
                <div className="flex flex-col md:flex-row gap-10 justify-between mt-5">
                  <div className="md:flex text-sky-700 gap-5">
                    <AuthorPostsButton
                      authorName={post.author_username}
                      className="flex items-center gap-2"
                    >
                      <FaUser />
                      <p>{post.author_username}</p>
                    </AuthorPostsButton>

                    <CategoryButton
                      className="flex items-center cursor-pointer gap-2"
                      category={post.category}
                    >
                      <FaFolderOpen />
                      <p>{post.category}</p>
                    </CategoryButton>
                  </div>

                  <div className="flex gap-5 justify-between border-t-2 md:border-0 pt-2">
                    <div className="flex gap-2 p-1">
                      <p>{post.like_count}</p>
                      <SlLike className="text-blue-400" size={20} />
                      <p>{post.dislike_count}</p>
                      <SlDislike className="text-red-400" size={20} />
                    </div>

                    <div className="flex gap-2 border p-1">
                      <a
                        aria-label="Share on Whatsapp"
                        href={`whatsapp://send?text=Check out this blog post: ${post.title} https://abassdev.com/blog/${post.category}/${post.slug}`}
                        data-action="share/whatsapp/share"
                      >
                        <FaWhatsappSquare
                          className="text-green-600"
                          size={20}
                        />
                      </a>
                      <a
                        aria-label="Share on Facebook"
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          `https://abassdev.com/blog/${post.category}/${post.slug}`
                        )}`}
                      >
                        <FaFacebook className="text-blue-600" size={20} />
                      </a>
                      <a
                        aria-label="Share on Facebook"
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                          `https://abassdev.com/blog/${post.category}/${post.slug}?text= Check out this blog post: ${post.title}`
                        )}`}
                      >
                        <FaTwitter className="text-blue-400" size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MainPostAction;
