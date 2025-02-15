import SuspenseLoading from "@/components/ui/SuspenseLoading";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import('@/components/contact/Contact'), { ssr: false, loading: () => <SuspenseLoading /> })

export const metadata: Metadata = {
  title: "Contact us - Abass Dev",
  description: "Web and mobile app developer at self-employed. | Abass Dev",
};

const Page = () => {
  return <Contact />;
};

export default Page;
