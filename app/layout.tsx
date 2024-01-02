import "./globals.css";
import Nav from "../components/navigation/Navigation";
import type { Metadata } from "next";
import localFont from "next/font/local";
import ScrollUp from "../components/ui/ScrollUp";
import { Footer, CookieConsent } from "../components";
import Theme from "../context/theme-provider";
import Script from "next/script";
const Inter = localFont({
  src: "../fonts/Inter/Inter-VariableFont_slnt,wght.ttf",
});

export const metadata: Metadata = {
  title: "Abass Dev | Full-stack developer | Personal portfolio",
  description: "Abass Dev personal portfolio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/android-chrome-512x512.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6427962014782182"
          strategy="lazyOnload"
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-N8ZTB9NPSP" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-N8ZTB9NPSP');
        `}
        </Script>
      </head>
      <body className={`${Inter.className} bg-gray-100`}>
        <Theme>
          <Nav />
          {children}
          <ScrollUp />
          <Footer />
          <CookieConsent />
        </Theme>
      </body>
    </html>
  );
}
