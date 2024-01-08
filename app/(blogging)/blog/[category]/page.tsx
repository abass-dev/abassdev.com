export async function generateStaticParams() {
  const res = await fetch("http://localhost:5001/api/posts", {
    cache: "no-store",
  });
  const posts = await res.json();

  return posts.map((post: any) => ({
    category: post.category,
  }));
}

const page = () => {
  return <div>Enter resolved categories path</div>;
};

export default page;
