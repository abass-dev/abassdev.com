import BlogNav from "@/components/blog/BlogNav";
import localFont from "next/font/local";

const Orbitron = localFont({
  src: "../../../../fonts/Orbitron/static/Orbitron-Black.ttf",
});
export async function generateStaticParams() {
  const res = await fetch(
    "https://dummyjson.com/posts?limit=10&skip=10&select=title,reactions,userId"
  );
  const data = await res.json();

  return data.posts.map((post: any) => ({
    id: post.id.toString(),
  }));
}

const getPost = async ({ id }: { id: string }) => {
  console.log(`https://dummyjson.com/posts/${id}`);

  // const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const res = await fetch(`https://dummyjson.com/posts/1`);
  const data = await res.json();

  return data;
};
const SinglePost = async ({ params }: any) => {
  const post = await getPost(params.id);

  return (
    <BlogNav>
      <div>
        <h1
          className={`${Orbitron.className} text-2xl text-gray-600 md:text-5xl font-bold text-center`}
        >
          {post.title}
        </h1>
        <p>{post.body}</p>
      </div>
    </BlogNav>
  );
};

export default SinglePost;
