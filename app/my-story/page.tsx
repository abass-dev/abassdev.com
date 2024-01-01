import { Metadata } from "next";
import MyStory from "../../components/story/MyStory";

export const metadata: Metadata = {
  title: "My story - Abass Dev",
  description:
    "A passionate web and mobile app developer with over 6 years of experience in programming and the internet. | Abass Dev",
};

const Page = () => {
  return <MyStory />;
};

export default Page;
