const getTags = async () => {
  const res = await fetch("http://localhost:5001/api/posts/tags");
  const data = await res.json();

  return data;
};

export default getTags;
