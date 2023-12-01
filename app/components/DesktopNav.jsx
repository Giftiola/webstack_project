import React, { useCallback } from "react";
import NavLink from "./NavLink";

const DesktopNav = ({
  navLinks,
  dropdownOpen,
  setDropdownOpen,
  dropdownRef,
}) => {
  const toggleDropdown = useCallback(
    (id) => {
      setDropdownOpen((prev) => (prev === id ? null : id));
    },
    [setDropdownOpen]
  );

  const closeDropdown = useCallback(() => {
    setDropdownOpen(false);
  }, [setDropdownOpen]);

  return (
    <div className="menu hidden md:block md:w-auto" id="navbar">
      <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
        {navLinks.map((link, index) => (
          <NavLink
            key={link.id || index}
            link={link}
            isActive={dropdownOpen === link.id}
            toggleDropdown={() => toggleDropdown(link.id)}
            closeMenu={closeDropdown}
            dropdownRef={dropdownRef}
          />
        ))}
      </ul>
    </div>
  );
};

export default DesktopNav;
