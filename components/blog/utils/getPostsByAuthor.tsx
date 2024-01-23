import API from "@/components/api";
import { notFound } from "next/navigation";

const getPostsByAuthor = async (authorName: string) => {
  const res = await fetch(`${API.BLOG_ALL_POSTS}/author/${authorName}`);
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();

  return data;
};

export default getPostsByAuthor;
