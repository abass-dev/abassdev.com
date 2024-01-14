export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5001/api/posts");
  const posts = await res.json();
  return posts.map((post: any) => ({
    category: post.category,
  }));
};

const getPost = async (category: string) => {
  const res = await fetch(
    `http://localhost:5001/api/posts/category/${category}`
  );
  const data = await res.json();
  return data;
};

const page = async ({ params }: any) => {
  const post = await getPost(params.category);

  return <div>Enter</div>;
};

export default page;
