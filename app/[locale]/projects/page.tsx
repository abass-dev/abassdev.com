import { Projects } from "@/components/projects/Projects";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface PageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "projects.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const Page = () => {
  return <Projects />;
};

export default Page;
