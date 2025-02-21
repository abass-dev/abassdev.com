import "../globals.css";
import { Orbitron, Edu_NSW_ACT_Foundation } from 'next/font/google';
import Theme from "@/context/theme-provider";
import { locales } from '../i18n';
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from 'next-intl';
import Navigation from "@/components/navigation/Navigation";
import ScrollUp from "@/components/ui/ScrollUp";
import { Footer } from "@/components/Footer";
import HeadScript from "@/components/HeadScript";
import { generateMetadata as pageMetadata } from './metadata';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700'],
});

export const eduNSW = Edu_NSW_ACT_Foundation({
  subsets: ['latin'],
  variable: '--font-edu-nsw',
  weight: ['400'],
});

// ✅ Garder seulement `generateMetadata` et supprimer `metadata`
export async function generateMetadata(props: any) {
  const pageSpecificMetadata = await pageMetadata(props);

  return {
    metadataBase: new URL('https://abassdev.com'),
    ...pageSpecificMetadata,
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${orbitron.variable} ${eduNSW.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Theme>
            <Navigation />
            <main>{children}</main>
            <ScrollUp />
            <Footer />
            <HeadScript />
          </Theme>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
