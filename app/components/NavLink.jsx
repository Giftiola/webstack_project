import React from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const NavLink = ({
  link,
  isActive,
  toggleDropdown,
  closeMenu,
  shouldHide,
  onHashLinkClick,
}) => {
  const hasDropdown = Array.isArray(link.links);
  const linkClass = shouldHide ? "hidden" : "block";
  const isHashLink = link.path && link.path.startsWith("#");

  const handleClick = (e) => {
    if (isHashLink) {
      e.preventDefault();
      onHashLinkClick(link.path);
    }
    closeMenu();
  };

  return (
    <li className={`relative group ${linkClass}`}>
      {hasDropdown ? (
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-1 py-2 pl-3 pr-4 text-[#93c5fd] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer focus:outline-none"
          aria-haspopup="true"
          aria-expanded={isActive ? "true" : "false"}
        >
          {link.title}
          {isActive ? (
            <ChevronUpIcon className="h-4 w-4" />
          ) : (
            <ChevronDownIcon className="h-4 w-4" />
          )}
        </button>
      ) : (
        <a
          href={link.path}
          onClick={handleClick}
          className="block py-2 pl-3 pr-4 text-[#93c5fd] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer"
        >
          {link.title}
        </a>
      )}
      {hasDropdown && isActive && (
        <ul className={`absolute left-0 w-32 bg-[#121212] mt-1`}>
          {link.links.map((subLink, subIndex) => (
            <li key={subLink.id || subIndex} className="w-full">
              <a
                href={subLink.path}
                onClick={handleClick}
                className="block py-2 pl-3 pr-4 text-[#93c5fd] sm:text-xl rounded hover:text-white cursor-pointer"
              >
                {subLink.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavLink;
