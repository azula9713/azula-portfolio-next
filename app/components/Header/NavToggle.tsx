"use client";

import { useEffect } from "react";

function NavToggle() {
  //if open close when user clicks outside of the menu
  useEffect(() => {
    let scrollListenerTimeout: NodeJS.Timeout;

    const handleCloseMenu = (e: Event) => {
      const navMenu = document.getElementById("navMenu");
      const toggle = document.getElementById(
        "hs-navbar-header-floating-collapse"
      );

      if (navMenu && toggle) {
        const ariaExpanded = toggle.getAttribute("aria-expanded");

        // Close the menu if it's open
        if (ariaExpanded === "true") {
          // For clicks, ensure the target is outside the navMenu
          if (e.type === "click" && navMenu.contains(e.target as Node)) {
            return;
          }

          // Simulate a click on the toggle button to close the menu
          toggle.click();
        }
      }
    };

    const addScrollListener = () => {
      scrollListenerTimeout = setTimeout(() => {
        document.addEventListener("scroll", handleCloseMenu, true);
      }, 100); // Small delay before activating the scroll listener
    };

    // Listen for clicks and scrolls
    document.addEventListener("click", handleCloseMenu);
    document.addEventListener("click", addScrollListener, true);

    return () => {
      document.removeEventListener("click", handleCloseMenu);
      document.removeEventListener("scroll", handleCloseMenu, true);
      document.removeEventListener("click", addScrollListener);

      clearTimeout(scrollListenerTimeout);
    };
  }, []);

  return (
    <div className="md:hidden">
      {/* Toggle Button */}
      <button
        type="button"
        className="hs-collapse-toggle flex justify-center items-center size-6 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
        id="hs-navbar-header-floating-collapse"
        aria-expanded="false"
        aria-controls="hs-navbar-header-floating"
        aria-label="Toggle navigation"
        data-hs-collapse="#hs-navbar-header-floating"
      >
        <svg
          className="hs-collapse-open:hidden shrink-0 size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1={3} x2={21} y1={6} y2={6} />
          <line x1={3} x2={21} y1={12} y2={12} />
          <line x1={3} x2={21} y1={18} y2={18} />
        </svg>
        <svg
          className="hs-collapse-open:block hidden shrink-0 size-4"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
      {/* End Toggle Button */}
    </div>
  );
}

export default NavToggle;
