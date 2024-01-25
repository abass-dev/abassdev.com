import AuthorPostsButton from "@/components/blog/AuthorPostsButton";
import BlogNav from "@/components/blog/BlogNav";
import ShareLinks from "@/components/blog/ShareLinks";
import TagsButton from "@/components/blog/TagsButton";
import getAllPosts from "@/components/blog/utils/getAllPosts";
import getPostBySlug from "@/components/blog/utils/getPostBySlug";
import { dateToReadable } from "@/helpers";
import { FaUser } from "react-icons/fa";
import Markdown from "react-markdown";

export async function generateMetadata({ params }: any) {
  const posts = await getPostBySlug(params.slug);

  return {
    title: `${posts[0].title} | Developer's Blog`,
    description:
      posts[0].short_description || "Explore all articles in Developer's Blog.",
  };
}
export const generateStaticParams = async () => {
  const posts = await getAllPosts();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
};

const page = async ({ params }: any) => {
  const posts = await getPostBySlug(params.slug);

  return (
    <BlogNav>
      {posts.map((post: any) => {
        return (
          <article key={post.id}>
            <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
              <div className="text-center border-gray-300 dark:border-gray-600 py-4 border-b-2 my-7">
                <p className="text-base font-medium mb-4 leading-6 text-gray-500 dark:text-gray-400">
                  {dateToReadable(post.created_at)}
                </p>
                <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-5xl md:leading-14">
                  {post.title}
                </h1>
              </div>
              <div className="flex sm:space-x-24">
                <div className="hidden h-full max-h-screen flex-col min-w-[280px] max-w-[280px] flex-wrap overflow-auto sm:flex">
                  {/* <div className="pb-2 ml-2">
                    <h1 className="font-bold text-xl uppercase text-gray-700 dark:text-gray-400">
                      All Tags
                    </h1>
                  </div> */}
                  <div className="border-b-2 py-8 border-gray-300 dark:border-gray-600 px-5">
                    <p className="uppercase text-base mb-3 text-gray-700 dark:text-gray-400">
                      Author
                    </p>
                    <AuthorPostsButton
                      authorName={post.author_username}
                      className="flex hover:text-sky-700 text-sky-500 items-center gap-2"
                    >
                      <FaUser />
                      <p>{post.author_username}</p>
                    </AuthorPostsButton>
                  </div>
                  <div className="border-b-2 py-8 border-gray-300 dark:border-gray-600 px-5">
                    <p className="uppercase text-base mb-3 text-gray-700 dark:text-gray-400">
                      Tags
                    </p>
                    <TagsButton
                      className=" flex items-center gap-2"
                      tags={post.tags_names}
                    />
                  </div>
                  <div className="border-b-2 py-8 border-gray-300 dark:border-gray-600 px-5">
                    <p className="uppercase text-base mb-3 text-gray-700 dark:text-gray-400">
                      Share
                    </p>
                    <ShareLinks post={post} />
                  </div>
                </div>
                <div>
                  <div className="prose prose-code:max-w-xs md:prose-code:max-w-lg prose-code:overflow-x-auto prose-code:whitespace-pre-wrap prose-headings:text-lg md:prose-headings:text-3xl prose-headings:font-bold prose-headings:dark:text-gray-300 prose-pre:dark:bg-gray-900 prose-code:dark:text-pink-400 dark:text-gray-50">
                    <Markdown>{post.body}</Markdown>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </BlogNav>
  );
};

export default page;
