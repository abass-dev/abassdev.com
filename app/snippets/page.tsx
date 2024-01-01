import { Metadata } from "next";
import Snippets from "../../components/snippets";

export const metadata: Metadata = {
  title: "Snippets | Abass Dev",
  description: "Easily improve your skills with code snippets. | Abass Dev",
};

function page() {
  return <Snippets />;
}

export default page;
