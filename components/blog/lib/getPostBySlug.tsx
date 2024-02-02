import API from "@/components/api";
import { notFound } from "next/navigation";

const secretKey = API.AUTHORIZATION_KEY || "";

const getPostBySlug = async (slug: string) => {
  const res = await fetch(`${API.BLOG_POSTS!}/slug/${slug}`, {
    cache: "no-cache",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: secretKey,
    },
  });
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();
  return data;
};

export default getPostBySlug;
