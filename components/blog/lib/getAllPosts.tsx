import API from "@/components/api";
import { notFound } from "next/navigation";

const secretKey = API.AUTHORIZATION_KEY || "";

const getAllPosts = async () => {
  const res = await fetch(API.BLOG_POSTS!, {
    cache: "no-cache",
    method: "GET",
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

export default getAllPosts;
