import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  // Update scroll width based on scrolling position
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

  // Add event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", updateScrollWidth);
    return () => {
      // Remove event listener on component unmount
      window.removeEventListener("scroll", updateScrollWidth);
    };
  }, []);

  return (
    <div
      style={{
        width: `${scrollWidth}%`,
        height: "5px",
        backgroundColor: "#00835a99", // Example color, you can customize it
        position: "fixed", // Example positioning, you can adjust it
        top: 0,
        left: 0,
        zIndex: 9999, // Ensure it appears above other elements
        transition: "width 0.3s ease", // Add transition effect for smooth animation
      }}
    />
  );
};

export default ProgressBar;
