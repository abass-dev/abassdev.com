import {
  FaClock,
  FaFacebook,
  FaFolderOpen,
  FaRegComment,
  FaTwitter,
  FaUser,
  FaWhatsappSquare,
} from "react-icons/fa";
import GoToButton from "./GoToButton";
import { dateToReadable } from "@/helpers";
import { SlDislike, SlLike } from "react-icons/sl";
import CategoryButton from "./CategoryButton";
import AuthorPostsButton from "./AuthorPostsButton";

const MainPostAction = ({ posts }: any) => {
  return (
    posts &&
    posts.map((post: any) => {
      return (
        <div
          className="bg-white shadow rounded-sm p-4 mb-5 md:mx-56 "
          key={post.id}
        >
          <GoToButton
            className="text-gray-700 underline hover:text-gray-900 cursor-pointer"
            category={post.category}
            slug={post.slug}
          >
            <h1 className="text-2xl  font-semibold">{post.title}</h1>
          </GoToButton>
          <p className="text-lg mt-5">{post.short_description}...</p>
          <div className="flex flex-col md:flex-row gap-10 justify-between mt-5">
            <div className="md:flex text-sky-700 gap-5">
              <AuthorPostsButton
                authorName={post.author_username}
                className="flex items-center gap-2"
              >
                <FaUser />
                <p>{post.author_username}</p>
              </AuthorPostsButton>

              <div className="flex items-center gap-2">
                <FaClock />
                <p>{dateToReadable(post.created_at)}</p>
              </div>
              <CategoryButton
                className="flex items-center cursor-pointer gap-2"
                category={post.category}
                slug={post.slug}
              >
                <FaFolderOpen />
                <p>{post.category}</p>
              </CategoryButton>

              {/*
                //Tags... 

                <div className="flex items-center gap-2">
                  <FaTags />
                  {post.tags_names &&
                    post.tags_names
                      .split(",")
                      .map((tag: any, index: number) => {
                        return <div key={index}>#{tag}</div>;
                      })}
                </div> */}

              <div className="flex items-center gap-2">
                <FaRegComment />
                {post.comments && post.comments.length}
              </div>
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
                  href={`whatsapp://send?text=Check out this blog post: ${post.title} http://abassdev.com/blog/${post.category}/${post.slug}`}
                  data-action="share/whatsapp/share"
                >
                  <FaWhatsappSquare className="text-green-600" size={20} />
                </a>
                <a
                  aria-label="Share on Facebook"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    `http://abassdev.com/blog/${post.category}/${post.slug}`
                  )}`}
                >
                  <FaFacebook className="text-blue-600" size={20} />
                </a>
                <a
                  aria-label="Share on Facebook"
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    `http://abassdev.com/blog/${post.category}/${post.slug}?text= Check out this blog post: ${post.title}`
                  )}`}
                >
                  <FaTwitter className="text-blue-400" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default MainPostAction;
