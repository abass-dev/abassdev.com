import { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "The Web Developer's Blog",
  description: "The Web Developer's Blog (WDB)",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/android-chrome-512x512.png",
    apple: "/apple-touch-icon.png",
  },
};

const SpaceGroteskSpaceGrotesk = localFont({
  src: "../../fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf",
  variable: "--font-space-grotesk",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${SpaceGroteskSpaceGrotesk.className}`}>{children}</div>
  );
}
