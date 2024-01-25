import Projects from "../../components/projects/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abass Dev - Projects",
  description: "Notable projects | Abass Dev",
};

const Page = () => {
  return <Projects page={true} />;
};

export default Page;
