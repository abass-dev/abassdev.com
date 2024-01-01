"use client";

import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const updateScrollWidth = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollWidth(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollWidth);
    return () => {
      window.removeEventListener("scroll", updateScrollWidth);
    };
  }, []);

  return (
    <div
      style={{
        width: `${scrollWidth}%`,
        height: "3px",
        backgroundColor: "#00835a",

        transition: "width 0.3s ease",
      }}
    />
  );
};

export default ProgressBar;
