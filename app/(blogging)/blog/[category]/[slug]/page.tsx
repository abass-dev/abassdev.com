import BlogNav from "@/components/blog/BlogNav";
import { dateToReadable } from "@/helpers";
import localFont from "next/font/local";
import { FaClock, FaFolderOpen, FaUser } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import Categories from "../../category/page";

const Orbitron = localFont({
  src: "../../../../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

const SinglePost = ({ posts }: any) => {
  if (posts.length > 0) {
    return (
      <div className="bg-white shadow rounded-sm my-5 md:mx-56 ">
        {posts &&
          posts.map((post: any) => {
            //  console.log(post.comments[0].comment_text);

            return (
              <div key={post.id} className="">
                <div className="bg-gray-900 p-5 text-gray-200 mb-10">
                  <h1
                    className={`${Orbitron.className}  text-2xl md:text-4xl font-bold text-center`}
                  >
                    {post.title}
                  </h1>
                  <div className="flex flex-col md:flex-row gap-10 justify-between mt-5">
                    <div className="md:flex text-gray-200 gap-5">
                      <div className="flex items-center gap-2">
                        <FaUser />
                        <p>{post.author_username}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <FaClock />
                        <p>{dateToReadable(post.created_at)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaFolderOpen />
                        <p>{post.category}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <ReactMarkdown
                  className={`prose max-w-none px-5 prose-a:text-blue-600 dark:prose-invert`}
                >
                  {post.body}
                </ReactMarkdown>

                <div className="bg-gray-100 p-5 mt-5">
                  <h4 className={`${Orbitron.className}`}>Comments</h4>
                  <div className="flex flex-col">
                    {post.comments.map((comment: any) => {
                      return <p key={comment}>User: {comment.comment_text}</p>;
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
};

export async function generateStaticParams() {
  const res = await fetch("http://localhost:5001/api/posts", {
    cache: "no-store",
  });
  const posts = await res.json();

  return posts.map((post: any) => ({
    slug: post.slug,
    category: post.category,
  }));
}

const getPosts = async ({ slug }: any) => {
  const res = await fetch(`http://localhost:5001/api/posts/single/${slug}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

const Post = async ({
  params,
}: {
  params: { slug: string; category: string };
}) => {
  const posts = await getPosts({ slug: params.slug });

  return (
    <BlogNav>
      <SinglePost posts={posts} />
    </BlogNav>
  );
};

export default Post;
