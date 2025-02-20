import Copyright from "@/components/Copyright";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface PageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Copyright.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const Page = () => {
  return <Copyright />;
};

export default Page;