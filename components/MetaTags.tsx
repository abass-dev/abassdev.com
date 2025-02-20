// app/components/MetaTags.tsx
'use client';

import { useTranslations } from "next-intl";

const MetaTags = ({ locale, messages }: { locale: string, messages: any }) => {
    const t = useTranslations(); // Now it's used in the client component

    return (
        <>
            <meta name="keywords" content={t("meta.keywords")} />
            <meta name="author" content={t("meta.author")} />
            <meta property="og:title" content={t("meta.ogTitle")} />
            <meta property="og:image" content="https://abassdev.com/images/bg_1.webp" />
            <meta property="og:url" content="https://abassdev.com" />
            <meta property="og:site_name" content="Abass Dev Portfolio" />
            <meta property="og:description" content={t("meta.ogDescription")} />
            <meta name="twitter:title" content={t("meta.twitterTitle")} />
            <meta name="twitter:image" content="https://abassdev.com/images/bg_1.webp" />
            <meta name="twitter:url" content="https://abassdev.com" />
            <meta name="twitter:card" content="summary_large_image" />
        </>
    );
};

export default MetaTags;
