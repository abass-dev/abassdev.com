import { Metadata } from "next";
import { Contact } from "../../components";

export const metadata: Metadata = {
  title: "Contact us - Abass Dev",
  description: "Web and mobile app developer at self-employed. | Abass Dev",
};

const Page = () => {
  return <Contact />;
};

export default Page;
