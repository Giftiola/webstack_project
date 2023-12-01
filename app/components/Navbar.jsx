"use client";
import React, { useState,  useRef, useEffect  } from "react";
import Image from "next/image";
import DesktopNav from "./DesktopNav";
import MobileMenuButton from "./MobileMenuButton";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/#about",
  },
 // {
  //  title: "Projects",
   // path: "/#projects",
 // },
 {
  title: "Resources",
  links: [
    {
      title: "Books with Observables",
      path: "/booksWithObservables",
    },
    {
      title: "Books with Promises",
      path: "/booksWithPromises",
    },
    {
      title: "Like Counter",
      path: "/likeCounter",
    },
  ],
},
  {
    title: "Contact",
    path: "/#contact",
  },
];

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => setNavbarOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleHashLinkClick = (e) => {
    const hash = e.currentTarget.getAttribute("href");
    if (hash === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (hash && hash.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-2 flex-wrap items-center justify-between mx-auto px-2 py-2">
      <Image 
        src="/logo.png"
        className="w-10 h-10 lg:w-16 lg:h-16  rounded-full"
        width={100}
        height={100}
        alt="image" />
        <MobileMenuButton navbarOpen={navbarOpen} toggleNavbar={toggleNavbar} />
        <DesktopNav
          navLinks={navLinks}
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
          dropdownRef={dropdownRef}
          onHashLinkClick={handleHashLinkClick}
        />
      </div>
      {navbarOpen && (
        <MenuOverlay links={navLinks} closeMenu={() => setNavbarOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
