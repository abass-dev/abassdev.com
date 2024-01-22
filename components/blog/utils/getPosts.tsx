const getPosts = async () => {
  const res = await fetch("http://localhost:5001/api/posts");
  const data = await res.json();

  return data;
};

export default getPosts;
