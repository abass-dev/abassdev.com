import { Metadata } from "next";
import MyStory from "../../components/story/MyStory";

export const metadata: Metadata = {
  title: "Abass Dev - My story",
  description: "My story | Abass Dev",
};

const Page = () => {
  return <MyStory />;
};

export default Page;
