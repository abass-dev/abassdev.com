"use client"

import { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link  from 'next/link'

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
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70">
      <div className="fixed bottom-0 left-0 right-0 flex col-row items-center justify-between px-4 py-8 bg-gray-100">
        <span className="text-base dark:text-gray-900 mr-16">
           This website use cookies to improve your browsing experience and analyze site traffic. See our{' '}
           <Link className='text-blue-700' href='/privacy-policy'> privacy policy</Link> for more details.
       </span>
        <button className="bg-green-500 py-2 px-8 rounded text-white" onClick={() => acceptCookie()}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent