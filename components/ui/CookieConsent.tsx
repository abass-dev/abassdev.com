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
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30); // 30 days from now

    setShowConsent(true);
    setCookie("privacyPolicy", "true", { expires: expirationDate });
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed z-50 backdrop-blur bg-gray-200/50  bottom-0 left-0 right-0">
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
          className="bg-pink-500  hover:bg-green-800 text-white p-1 rounded-lg"
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
