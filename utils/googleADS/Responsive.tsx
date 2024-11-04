// @ts-ignore
// @ts-nocheck

"use client";

import React, { useEffect } from "react";

const Responsive = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: "block" }}
         data-ad-client="ca-pub-4160637975098001"
         data-ad-slot="8364922863"
         data-ad-format="auto"
         data-full-width-responsive="true">
    </ins>
  );
};

export default Responsive;
