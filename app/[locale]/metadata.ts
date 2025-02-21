import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

interface PageProps {
    params: {
        locale: string;
    };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const t = await getTranslations('HomePage.meta');

    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
        authors: [{ name: t('author') }],
        openGraph: {
            title: t('ogTitle'),
            description: t('ogDescription'),
            siteName: t('siteName'),
            type: 'website',
            locale: params.locale,
            alternateLocale: params.locale === 'en' ? ['fr'] : ['en'],
        },
        twitter: {
            card: 'summary_large_image',
            title: t('twitterTitle'),
            description: t('twitterDescription'),
        },
        alternates: {
            canonical: '/',
            languages: {
                en: '/en',
                fr: '/fr',
            },
        },
    };
}
