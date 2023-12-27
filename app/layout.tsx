import "./globals.css";
import Nav from "../components/navigation/Navigation";
import type { Metadata } from "next";
import localFont from "next/font/local";
import ScrollUp from "../components/ui/ScrollUp";
import { Footer, CookieConsent } from "../components";
import Theme from "../context/theme-provider";

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
