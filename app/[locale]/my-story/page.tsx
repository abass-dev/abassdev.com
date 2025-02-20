import MyStory from "@/components/story/MyStory";
import { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

interface PageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'myStory.metadata' });

  return {
    title: t('title'), // Translated title from en.json or fr.json
    description: t('description'), // Translated description from en.json or fr.json
  };
}

const Page = () => {
  return <MyStory />;
};

export default Page;