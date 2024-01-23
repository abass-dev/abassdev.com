import API from "@/components/api";
import { notFound } from "next/navigation";

const getCategory = async (category: string) => {
  const res = await fetch(`${API.BLOG_ALL_POSTS}/category/${category}`);
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();

  return data;
};
export default getCategory;
