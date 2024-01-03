import BlogNav from "@/components/blog/BlogNav";
import GoToButton from "@/components/blog/GoToButton";
import localFont from "next/font/local";
import {
  FaClock,
  FaFacebook,
  FaTwitter,
  FaUser,
  FaWhatsappSquare,
} from "react-icons/fa";

const Orbitron = localFont({
  src: "../../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

const getPosts = async () => {
  const res = await fetch(
    "https://dummyjson.com/posts?limit=10&skip=10&select=title,reactions,userId"
  );
  const data = await res.json();

  return data.posts;
};

const Blog = async () => {
  const posts = await getPosts();
  //  console.log(posts);

  return (
    <>
      <BlogNav>
        <div className="flex justify-center items-center min-h-[20vh] md:min-h-[40vh]">
          <h1
            className={`${Orbitron.className} text-2xl text-gray-600 md:text-5xl font-bold text-center`}
          >
            {`{"Welcome, We Are `}{" "}
            <span className="inline-block bg-gradient-to-r bg-clip-text text-transparent to-gray-600 from-green-600">
              Devs Blog!
            </span>
            {`"}`}
          </h1>
        </div>

        {posts.length > 0 &&
          posts.map((post: any) => {
            return (
              <div
                className="bg-white shadow rounded-sm p-4 mb-5 md:mx-56 "
                key={post.id}
              >
                <GoToButton id={post.id}>
                  <h1 className="text-2xl  font-semibold">{post.title}</h1>
                </GoToButton>
                <p className="text-lg mt-5">
                  In this tutorial we are going to show you how to build a
                  responsive website using Next.js So make sure that your
                  ready...
                </p>
                <div className="flex flex-col md:flex-row gap-10 justify-between mt-5">
                  <div className="md:flex text-sky-700 gap-5">
                    <div className="flex items-center gap-2">
                      <FaUser />
                      <p>abassdev</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock />
                      <p>Tue Mar 13, 2023</p>
                    </div>
                  </div>

                  <div className="flex justify-center  items-center gap-2">
                    <p>Share:</p>
                    <FaFacebook className="text-blue-600" size={20} />
                    <FaWhatsappSquare className="text-green-600" size={20} />
                    <FaTwitter className="text-blue-400" size={20} />
                  </div>
                </div>
              </div>
            );
          })}
      </BlogNav>
    </>
  );
};

export default Blog;
