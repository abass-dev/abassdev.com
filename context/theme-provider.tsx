"use client";

import { ThemeProvider } from "next-themes";

export default function Theme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem={true}
      attribute="class"
      defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
