import React, { useState, useCallback } from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, closeMenu }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = useCallback((id) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  }, []);

  const isResourcesActive =
    activeDropdown === links.find((l) => l.title === "Resources")?.id;

  return (
    <ul className="flex flex-col py-4 items-center w-full">
      {links.map((link, index) => {
        const shouldHide = isResourcesActive && link.title === "Contact";
        return (
          <NavLink
            key={link.id || index}
            link={link}
            isActive={activeDropdown === link.id}
            toggleDropdown={() => toggleDropdown(link.id)}
            closeMenu={closeMenu}
            shouldHide={shouldHide}
          />
        );
      })}
    </ul>
  );
};

export default MenuOverlay;
