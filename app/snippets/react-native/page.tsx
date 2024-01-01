import ReactNativeSnippets from "@/components/snippets/reactNativeSnippets";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Native code snippets | Abass Dev",
  description:
    "Master React Native with Ease: Dive into Simple, Hands-on Learning with Code Snippets",
};

const page = () => {
  return <ReactNativeSnippets />;
};
export default page;
