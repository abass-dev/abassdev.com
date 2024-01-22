const getPostsByAuthor = async (authorName: string) => {
  const res = await fetch(
    `http://localhost:5001/api/posts/author/${authorName}`
  );
  const data = await res.json();

  return data;
};

export default getPostsByAuthor;
