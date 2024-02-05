import { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "The Web Developer's Blog",
  description:
    "Stay ahead with valuable resources, offering industry insights, best practices, and more to keep you well-informed | Devs Blog",
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
