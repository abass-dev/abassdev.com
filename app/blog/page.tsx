import BlogNav from "@/components/blog/BlogNav";
import localFont from "next/font/local";
import MainPostAction from "@/components/blog/MainPostAction";

const Orbitron = localFont({
  src: "../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

const getPosts = async () => {
  const res = await fetch("http://localhost:5001/api/posts", {
    cache: "no-store",
  });
  const data = await res.json();

  return data;
};

const Blog = async () => {
  const posts = await getPosts();

  return (
    <>
      <BlogNav>
        <div className="flex justify-center items-center min-h-[20vh] md:min-h-[40vh]">
          <h1
            className={`${Orbitron.className} text-2xl text-gray-600 md:text-5xl font-bold text-center`}
          >
            {`{"Welcome To `}{" "}
            <span className="inline-block bg-gradient-to-r bg-clip-text text-transparent to-gray-600 from-green-600">
              Devs Blog!
            </span>
            {`"}`}
          </h1>
        </div>
        <MainPostAction posts={posts} />
      </BlogNav>
    </>
  );
};

export default Blog;
