import API from "../api";

export const getLastPost = async () => {
  const res = await fetch(`${API.BLOG_ALL_POSTS}/last-post`);
  const data = await res.json();

  return data;
};
