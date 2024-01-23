import API from "@/components/api";
import { notFound } from "next/navigation";

const getAllTags = async () => {
  const res = await fetch(`${API.BLOG_ALL_POSTS}/tags`);
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();

  return data;
};

export default getAllTags;
