"use client";

import { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consentGiven = hasCookie("privacyPolicy");
    if (!consentGiven) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookie = () => {
    setCookie("privacyPolicy", "true", { maxAge: 60 * 60 * 24 * 365 }); // 1 year
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed z-50 bottom-5 left-5 right-5 lg:bottom-8 lg:left-8 lg:right-8 bg-gray-900 text-white rounded-lg shadow-lg animate-slide-up">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 md:gap-8">
        <p className="text-sm md:text-base text-center md:text-left leading-relaxed">
          This website uses cookies to improve your browsing experience and analyze site traffic.{" "}
          <Link href="/privacy-policy" className="text-blue-400 underline hover:text-blue-600">
            See our privacy policy
          </Link>{" "}
          for details.
        </p>
        <button
          onClick={acceptCookie}
          className="px-4 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-800 transition-colors duration-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
