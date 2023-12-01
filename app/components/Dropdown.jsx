import React from "react";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

function Dropdown({ title, links, isActive, toggleDropdown, closeMenu }) {
  return (
    <div className="w-full text-center">
      <div className="flex justify-center items-center w-full">
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-2 py-2 pl-3 pr-4 text-[#93c5fd] sm:text-xl rounded hover:text-white cursor-pointer focus:outline-none"
        >
          {title}
          {isActive ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </button>
      </div>
      {isActive && (
        <ul className="space-y-2 mt-2">
          {links.map((subLink, subIndex) => (
            <li key={subLink.id || subIndex} className="text-center">
              <Link href={subLink.path}>
                <span
                  onClick={closeMenu}
                  className="block py-2 pl-3 pr-4 text-[#93c5fd] sm:text-xl rounded hover:text-white cursor-pointer"
                >
                  {subLink.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
