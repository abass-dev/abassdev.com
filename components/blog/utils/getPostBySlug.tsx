import API from "@/components/api";
import { notFound } from "next/navigation";

const getPostBySlug = async (slug: string) => {
  const res = await fetch(`${API.BLOG_ALL_POSTS!}/slug/${slug}`);
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();
  return data;
};

export default getPostBySlug;
