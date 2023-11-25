import "./globals.css";
import Head from "next/head";
import Nav from "../components/navigation";
import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "../components/navigation";
import localFont from "next/font/local";
import ScrollUp from "../components/ui/ScrollUp";
import { Footer } from "../components";
import Theme from '../context/theme-provider'

const Orbitron = localFont({
  src: "../fonts/Orbitron/Orbitron-VariableFont_wght.ttf",
});
const Inter = localFont({
  src: "../fonts/Inter/Inter-VariableFont_slnt,wght.ttf",
});

export const metadata: Metadata = {
  title: "Abass Dev | Full-stack developer | Personal portfolio",
  description: "Abass Dev personal portfolio",
  /*  icons: {
    icon: '/favicon.ico',
    shortcut: '/android-chrome-512x512.png',
    apple: '/apple-touch-icon.png'
}
*/
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
      </Theme>
      </body>
    </html>
  );
}
