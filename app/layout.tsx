import "./globals.css";
import { Orbitron, Edu_NSW_ACT_Foundation } from 'next/font/google';
import type { Metadata } from "next";
import { MainContextProvider } from "@/context/MainContext";
import Main from "@/components/Main";
import Theme from "@/context/theme-provider";

export const metadata: Metadata = {
  title: "Abass Dev | Full-stack developer | Personal portfolio",
  description: "Abass Dev personal portfolio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/apple-touch-icon.png",
    apple: "/apple-touch-icon.png",
  },
};

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700'],
});

export const eduNSW = Edu_NSW_ACT_Foundation({
  subsets: ['latin'],
  variable: '--font-edu-nsw',
  weight: ['400'], // Only one weight is available for this font
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta
          name="keywords"
          content="web development, mobile app development, graphic design, e-commerce, portfolio, Abass Dev"
        />
        <meta name="author" content="Abass Dev" />
        <meta property="og:title" content="Abass Dev- Web and Mobile Developer Portfolio" />
        <meta property="og:image" content="https://abassdev.com/images/bg_1.webp" />
        <meta property="og:url" content="https://abassdev.com" />
        <meta property="og:site_name" content="Abass Dev Portfolio" />
        <meta property="og:description" content="Discover my work in web and mobile app development, graphic design, and more." />
        <meta name="twitter:title" content="Abass - Web and Mobile Developer Portfolio" />
        <meta name="twitter:image" content="https://abassdev.com/images/bg_1.webp" />
        <meta name="twitter:url" content="https://abassdev.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${orbitron.variable} ${eduNSW.variable}`}>
        <Theme>
          <MainContextProvider>
            <Main>{children}</Main>
          </MainContextProvider>
        </Theme>
      </body>
    </html>
  );
}
