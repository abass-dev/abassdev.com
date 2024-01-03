import ReactSnippets from "@/components/snippets/reactSnippets";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React code snippets | Abass Dev",
  description:
    "Master React.js with Ease: Dive into Simple, Hands-on Learning with Code Snippets",
};

const page = () => {
  return <ReactSnippets />;
};

export default page;
