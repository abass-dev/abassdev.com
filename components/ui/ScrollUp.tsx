"use client";

import { useEffect, useRef } from "react";
import { BsChevronDoubleUp } from "react-icons/bs";

const ScrollUp = () => {
  const btnUpRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      // Get the current vertical scroll position

      // Check if the scroll position is greater than or equal to 100 pixels
      if (scrollY < 712) {
        if (btnUpRef.current && btnUpRef.current.classList) {
          btnUpRef.current.classList.add("hidden");
        }
      } else {
        if (btnUpRef.current && btnUpRef.current.classList) {
          btnUpRef.current.classList.remove("hidden");
        }
      }
    };

    // Add a scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [btnUpRef]); // Empty dependency array ensures the effect only runs on mount and unmountl

  const handleOnGoUp = () => {
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
        zIndex: 100,
        backgroundColor: "#00835a99",
        margin: "auto",
      }}
      onClick={handleOnGoUp}
      className={`scroll-up hidden`}
      ref={btnUpRef}
      id="scrollUpButton"
    >
      <div style={{ display: "flex", justifyContent: "center", paddingTop: 6 }}>
        <BsChevronDoubleUp color="white" size={25} />
      </div>
    </div>
  );
};

export default ScrollUp;
