"use client";

import { useEffect, useState } from "react";
import ChevronDoubleUpIcon from "../svg-component/ChevronDoubleUp";

const SCROLL_THRESHOLD = 712;
const SCROLL_BEHAVIOR: ScrollBehavior = "smooth";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsVisible(scrollY >= SCROLL_THRESHOLD);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: SCROLL_BEHAVIOR,
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg 
        bg-white dark:bg-gray-800
        hover:bg-gray-100 dark:hover:bg-gray-700
        ring-1 ring-gray-200 dark:ring-gray-700
        focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
        transition-all duration-300"
      aria-label="Scroll to top"
    >
      <ChevronDoubleUpIcon
        className="w-6 h-6 text-gray-700 dark:text-gray-200"
      />
    </button>
  );
};

export default ScrollUp;