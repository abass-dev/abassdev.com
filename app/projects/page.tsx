import Projects from "../../components/projects/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abass Dev - Projects",
  description: "Projects | Abass Dev",
};

const Page = () => {
  return <Projects />;
};

export default Page;