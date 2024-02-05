import API from "@/components/api";
import { notFound } from "next/navigation";

const secretKey = API.AUTHORIZATION_KEY || "";
const getAllTCategories = async () => {
  const res = await fetch(`${API.BLOG_POSTS}/categories`, {
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

export default getAllTCategories;
