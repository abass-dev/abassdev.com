"use client";

import { useEffect, useRef } from "react";
import { BsChevronDoubleUp } from "react-icons/bs";

const ScrollUp = () => {
  const btnUpRef = useRef<HTMLDivElement | null>(null); // Specify the HTMLDivElement type

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      if (scrollY < 712 && btnUpRef.current && btnUpRef.current.classList) {
        btnUpRef.current.classList.add("hidden");
      } else if (btnUpRef.current && btnUpRef.current.classList) {
        btnUpRef.current.classList.remove("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect only runs on mount and unmount

  const handleUpButton = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <div
      style={{
        width: 40,
        height: 40,
        position: "fixed",
        right: 10,
        bottom: 10,
        borderRadius: 100,
        zIndex: 49,
        backgroundColor: "#00835a99",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={handleUpButton}
      className={`scroll-up hidden`}
      ref={btnUpRef}
      id="scrollUpButton"
    >
      <div className="cursor-pointer">
        <BsChevronDoubleUp color="white" size={25} />
      </div>
    </div>
  );
};

export default ScrollUp;
