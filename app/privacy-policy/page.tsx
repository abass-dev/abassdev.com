import SuspenseLoading from "@/components/ui/SuspenseLoading";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const  PrivacyPolicy =  dynamic(() => import('../../components/PrivacyPolicy'), {ssr: false, loading: () => <SuspenseLoading />})

export const metadata: Metadata = {
  title: "Privacy policy - Abass Dev",
  description: "Privacy policy | Abass Dev",
};

const Page = () => {
  return <PrivacyPolicy />;
};

export default Page;