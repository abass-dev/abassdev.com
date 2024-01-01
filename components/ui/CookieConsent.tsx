"use client";

import { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("privacyPolicy"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("privacyPolicy", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed z-50 bg-black text-white bottom-0 left-0 right-0">
      <div className="flex justify-between items-center p-5">
        <p className="text-base">
          This website use cookies to improve your browsing experience and
          analyze site traffic.{" "}
          <Link href="/privacy-policy" className="text-blue-800">
            See our privacy policy
          </Link>{" "}
          for details.
        </p>
        <button
          onClick={acceptCookie}
          className="bg-white text-black hover:bg-blue-800 hover:text-white p-1 rounded-lg"
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
