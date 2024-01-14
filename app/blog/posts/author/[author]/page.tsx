export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5001/api/posts");
  const posts = await res.json();
  console.log(posts);

  return posts.map((post: any) => ({
    author: post.author_username,
  }));
};

const getPost = async (author: string) => {
  const res = await fetch(`http://localhost:5001/api/posts/author/${author}`);
  const data = await res.json();
  return data;
};

const page = async ({ params }: any) => {
  const post = await getPost(params.author);

  return <div>Enter</div>;
};

export default page;
