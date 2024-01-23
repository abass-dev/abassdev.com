import API from "@/components/api";
import { notFound } from "next/navigation";

const getSingleTag = async (tag: string) => {
  const res = await fetch(`${API.BLOG_ALL_POSTS}/tag/${tag}`);
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();

  return data;
};

export default getSingleTag;
