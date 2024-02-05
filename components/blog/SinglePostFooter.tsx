import Link from "next/link";
import API from "../api";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";
import getAllPosts from "./lib/getAllPosts";
import { getLastPost } from "./lib/getLastPost";

type Props = {
  currentPostId: number;
};

const secretKey = API.AUTHORIZATION_KEY || "";

const getNextPostById = async (id: number) => {
  const res = await fetch(`${API.BLOG_POSTS}/id/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: secretKey,
    },
  });
  const data = await res.json();

  return data;
};
const getPreviousPost = async () => {
  const data = await getAllPosts();

  return data;
};

const GotoPreviousPostButton = ({
  slug,
  text,
}: {
  slug: string;
  text: string;
}) => {
  return (
    <Link
      className=" text-blue-600 hover:text-blue-800"
      href={`/blog/posts/${slug}`}
    >
      <div className="flex items-center  w-[200px] md:w-[300px]">
        <RiArrowLeftDoubleFill size={25} />
        <span className="font-semibold line-clamp-1">{text}</span>{" "}
      </div>
    </Link>
  );
};
const GotoNextPostButton = ({ slug, text }: { slug: string; text: string }) => {
  return (
    <Link
      className=" text-blue-600 hover:text-blue-800"
      href={`/blog/posts/${slug}`}
    >
      <div className="flex items-center  w-[200px] md:w-[300px]">
        <span className="font-semibold line-clamp-1">{text}</span>{" "}
        <RiArrowRightDoubleFill size={25} />
      </div>
    </Link>
  );
};

const SinglePostFooter = async ({ currentPostId }: Props) => {
  const nextPostId = currentPostId + 1;
  const nextPostData = await getNextPostById(nextPostId);
  const previousPostData = await getNextPostById(currentPostId - 1);
  const lastPostData = await getLastPost();
  const previousPost = await getPreviousPost();

  return (
    <div
      className={`${
        currentPostId > previousPost[0].id
          ? "md:justify-between"
          : "md:justify-end"
      } flex flex-col md:flex-row items-center gap-5  md:gap-0  pt-12`}
    >
      {previousPostData[0]
        ? currentPostId > previousPostData[0].id && (
            <GotoPreviousPostButton
              slug={previousPostData[0].slug}
              text={previousPostData[0].title}
            />
          )
        : null}
      {nextPostData[0]
        ? currentPostId < lastPostData[0].id && (
            <GotoNextPostButton
              slug={nextPostData[0].slug}
              text={nextPostData[0].title}
            />
          )
        : null}
    </div>
  );
};

export default SinglePostFooter;
