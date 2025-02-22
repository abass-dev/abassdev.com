'use client';

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface AnalyticsProps {
  GA_MEASUREMENT_ID: string;
  ADS_ID: string;
}

export default function Analytics({ GA_MEASUREMENT_ID, ADS_ID }: AnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return; // ✅ Only run in production

    if (pathname && window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname,
      });
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  // ✅ Don't load scripts in non-production environments
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* Google AdSense */}
      <Script
        id="google-adsense"
        strategy="afterInteractive"
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_ID}`}
        crossOrigin="anonymous"
      />
    </>
  );
}
