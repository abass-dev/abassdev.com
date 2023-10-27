import { Metadata } from "next";
import { Report, Contact } from '../../components'

export const metadata: Metadata = {
  title: "Abass Dev - Contact us",
  description: "Contact us | Abass Dev",
};

const Page = () => {
  return <Contact />;
};

export default Page;
