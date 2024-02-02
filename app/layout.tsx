import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Theme from "../context/theme-provider";
import Script from "next/script";
import { CookieConsent } from "@/components";
import ScrollUp from "@/components/ui/ScrollUp";
const Inter = localFont({
  src: "../fonts/Inter/Inter-VariableFont_slnt,wght.ttf",
});

export const metadata: Metadata = {
  title: "Abass Dev | Full-stack developer | Personal portfolio",
  description: "Abass Dev personal portfolio",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon512_rounded.png",
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
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />

        {process.env.NODE_ENV !== "development" && (
          <>
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
          </>
        )}
      </head>
      <body className={`${Inter.className} bg-gray-100`}>
        <Theme>
          <main>{children}</main>
          <ScrollUp />
          <CookieConsent />
        </Theme>
      </body>
    </html>
  );
}
