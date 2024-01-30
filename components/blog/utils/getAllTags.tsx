import API from "@/components/api";
import { notFound } from "next/navigation";

const secretKey = API.AUTHORIZATION_KEY || "";
const getAllTags = async () => {
  const res = await fetch(`${API.BLOG_ALL_POSTS}/tags`, {
    method: "GET",
    cache: "no-cache",
    headers: {
      Authorization: secretKey,
    },
  });
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();

  return data;
};

export default getAllTags;
