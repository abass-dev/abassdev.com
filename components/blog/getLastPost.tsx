import API from "../api";

const secretKey = API.AUTHORIZATION_KEY || "";

export const getLastPost = async () => {
  const res = await fetch(`${API.BLOG_ALL_POSTS}/last-post`, {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: secretKey,
    },
  });
  const data = await res.json();

  return data;
};
