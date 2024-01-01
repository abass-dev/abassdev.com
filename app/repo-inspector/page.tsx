import { Metadata } from "next";
import { Inspector } from "../../components";

export const metadata: Metadata = {
  title: "Repo Inspector | Abass Dev",
  description: "Inspect your Github and GitLab repositories | Abass Dev",
};

const Page = () => {
  return <Inspector />;
};

export default Page;
