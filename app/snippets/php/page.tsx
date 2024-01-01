import PHPSnippets from "@/components/snippets/PHPSnippets";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PHP code snippets | Abass Dev",
  description:
    "Master PHP with Ease: Dive into Simple, Hands-on Learning with Code Snippets",
};

const page = () => {
  return <PHPSnippets />;
};
export default page;
