import "./globals.css";
import Nav from "../components/navigation/Navigation";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Theme from "../context/theme-provider";
import HeadScript from "@/components/HeadScript";

const Footer = dynamic(() => import("../components/Footer"), { ssr: false });
const ScrollUp =  dynamic(() => import("../components/ui/ScrollUp"), { ssr: false });


export const metadata: Metadata = {
  title: "Abass Dev | Full-stack developer | Personal portfolio",
  description: "Abass Dev personal portfolio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/apple-touch-icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
      <body className='bg-gray-100'>
        <Theme>
          <Nav />
          <main>{children}</main>
          <ScrollUp />
          <Footer />
        </Theme>
        <HeadScript />
      </body>
    </html>
  );
}
