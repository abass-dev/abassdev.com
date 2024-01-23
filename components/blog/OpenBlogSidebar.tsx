"use client";
import { useEffect } from "react";

const OpenBlogSidebar: React.FC = () => {
  useEffect(() => {
    const openSidebar = () => {
      const sidebar = document.getElementById("sidebar");
      const openSidebarButton = document.getElementById("open-sidebar");

      if (sidebar && openSidebarButton) {
        openSidebarButton.addEventListener("click", (e) => {
          e.stopPropagation();
          sidebar.classList.toggle("-translate-x-full");
        });

        // Close the sidebar when clicking outside of it
        document.addEventListener("click", (e) => {
          if (
            sidebar &&
            !sidebar.contains(e.target as Node) &&
            !openSidebarButton.contains(e.target as Node)
          ) {
            sidebar.classList.add("-translate-x-full");
          }
        });
      }

      return () => {
        // Remove event listeners when component unmounts
        if (openSidebarButton) {
          openSidebarButton.removeEventListener("click", openSidebar);
        }
        document.removeEventListener("click", openSidebar);
      };
    };

    openSidebar();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return null; // This component doesn't render anything
};

export default OpenBlogSidebar;
