"use client";

import { useEffect, useState } from "react";
import NavListItem from "./NavListItem";

function NavBar() {
  const navList = [
    {
      title: "Home",
      id: "home",
    },
    {
      title: "Projects",
      id: "projects",
    },
    {
      title: "Work",
      id: "work",
    },
    {
      title: "Articles",
      id: "articles",
    },
  ];

  const [selectedNav, setSelectedNav] = useState("Home");

  useEffect(() => {
    //    navigate to the div id
    if (selectedNav !== "home") {
      const element = document.getElementById(selectedNav);

      //scroll to 100px above the element
      if (element) {
        const yCoordinate =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: yCoordinate - 100, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedNav]);

  return (
    <div
      id="hs-navbar-header-floating"
      className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block"
      aria-labelledby="hs-navbar-header-floating-collapse"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
        {navList.map((item) => (
          <NavListItem
            key={item.title}
            id={item.id}
            itemName={item.title}
            onNavClick={setSelectedNav}
            isCurrent={selectedNav === item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default NavBar;
