import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Copyright - Abass Dev",
  description: "Copyright © 2024 Abass Dev. All rights reserved. | Abass Dev",
};


const  Copyright =  dynamic(() => import('../../components/Copyright'), {ssr: false})

const Page = () => {
  return <Copyright />;
};

export default Page;
