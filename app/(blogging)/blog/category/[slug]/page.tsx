export async function generateStaticParams() {
  const res = await fetch("http://localhost:5001/api/posts", {
    cache: "no-store",
  });
  const posts = await res.json();

  return posts.map((post: any) => ({
    category: post.category,
    slug: post.category,
  }));
}

const getData = async (slug: any) => {
  const res = await fetch(`http://localhost:5001/api/posts/${slug}`, {
    cache: "no-store",
  });

  return res.json();
};

const SingleCategory = async (params: { slug: any }) => {
  console.log(params.slug);
  const posts = await getData("php");

  // return <></>;

  return (
    <div>
      Single category
      {posts.map((cat: any) => {
        return <div key={cat.id}>{cat.title}</div>;
      })}
    </div>
  );
};

export default SingleCategory;
