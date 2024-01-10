import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Web Developers Blog (WDB) | Abass Dev",
  description: "The Web Developers Blog by Abass Dev",
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
  return <div>{children}</div>;
}
