import BlogNav from "@/components/blog/BlogNav";
import localFont from "next/font/local";

const Orbitron = localFont({
  src: "../../../../fonts/Orbitron/static/Orbitron-Black.ttf",
});
export async function generateStaticParams() {
  const res = await fetch("http://localhost:5001/api/posts/");
  const posts = await res.json();

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

const getPosts = async ({ slug }: any) => {
  const res = await fetch(`http://localhost:5001/api/posts/single/${slug}`);
  const data = await res.json();
  return data;
};

const SinglePost = async ({ params }: { params: { slug: string } }) => {
  const post = await getPosts({ slug: params.slug });

  return (
    <BlogNav>
      <div>
        <h1
          className={`${Orbitron.className} text-2xl text-gray-600 md:text-5xl font-bold text-center`}
        >
          {post[0].title}
        </h1>
        <p>{post[0].body}</p>
      </div>
    </BlogNav>
  );
};

export default SinglePost;
