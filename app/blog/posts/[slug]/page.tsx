import AuthorPostsButton from "@/components/blog/AuthorPostsButton";
import BlogNav from "@/components/blog/BlogNav";
import ShareLinks from "@/components/blog/ShareLinks";
import TagsButton from "@/components/blog/TagsButton";
import { dateToReadable } from "@/helpers";
import { notFound } from "next/navigation";
import { FaUser } from "react-icons/fa";
import Markdown from "react-markdown";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5001/api/posts");
  if (!res.ok) {
    notFound();
  }
  const posts = await res.json();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
};

const getPost = async (slug: string) => {
  const res = await fetch(`http://localhost:5001/api/posts/slug/${slug}`);
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();
  return data;
};

const page = async ({ params }: any) => {
  const posts = await getPost(params.slug);

  return (
    <div>
      {posts.map((post: any) => {
        return (
          <BlogNav key={post.id}>
            <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
              <div className="text-center border-gray-300 py-4 border-b-2 my-7">
                <p className="text-base font-medium mb-4 leading-6 text-gray-500 dark:text-gray-400">
                  {dateToReadable(post.created_at)}
                </p>
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                  {post.title}
                </h1>
              </div>
              <div className="flex sm:space-x-24">
                <div className="hidden h-full max-h-screen flex-col min-w-[280px] max-w-[280px] flex-wrap overflow-auto  dark:bg-gray-900/70 sm:flex">
                  {/* <div className="pb-2 ml-2">
                    <h1 className="font-bold text-xl uppercase text-gray-700">
                      All Tags
                    </h1>
                  </div> */}
                  <div className="border-b-2 py-8 border-gray-300">
                    <AuthorPostsButton
                      authorName={post.author_username}
                      className="flex text-sky-600 items-center gap-2"
                    >
                      <FaUser />
                      <p>{post.author_username}</p>
                    </AuthorPostsButton>
                  </div>
                  <div className="border-b-2 py-8 border-gray-300">
                    <p className="uppercase text-base mb-3 text-gray-700">
                      Tags
                    </p>
                    <TagsButton
                      className=" flex items-center gap-2"
                      tags={post.tags_names}
                    />
                  </div>
                  <div className="border-b-2 py-8 border-gray-300">
                    <p className="uppercase text-base mb-3 text-gray-700">
                      Share
                    </p>
                    <ShareLinks post={posts} />
                  </div>
                </div>
                <div>
                  <div className="min-w-full prose prose-pre:max-w-[300px] md:prose-pre:max-w-lg">
                    <Markdown>{post.body}</Markdown>
                  </div>
                </div>
              </div>
            </div>
          </BlogNav>
        );
      })}
    </div>
  );
};

export default page;
