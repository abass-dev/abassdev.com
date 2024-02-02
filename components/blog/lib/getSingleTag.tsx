import API from "@/components/api";
import { notFound } from "next/navigation";

const secretKey = API.AUTHORIZATION_KEY || "";

export const revalidate = 10;
const getSingleTag = async (tag: string) => {
  const res = await fetch(`${API.BLOG_POSTS}/tag/${tag}`, {
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

export default getSingleTag;
