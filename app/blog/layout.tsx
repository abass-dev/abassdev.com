import { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "The Web Developers Blog (WDB) | Abass Dev",
  description: "The Web Developers Blog by Abass Dev",
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
