"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoSmall from "../links/LogoSmall";
import navLinksData from "@/data/navlinksdata";
import NavLink from "../links/NavLink";
import { useState } from "react";

const links = navLinksData.map((link) => {
  return <NavLink title={link.title} url={link.url} key={link.id} />;
});

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex h-full w-full items-center justify-between px-8 lg:hidden">
      <LogoSmall />
      <FontAwesomeIcon
        icon={faBars}
        size="lg"
        className="h-10 w-10 text-primaryGreen"
        onClick={toggleMenu}
      />
      <nav
        className={`${isOpen ? "block" : "hidden"} absolute left-1/2 top-24 flex w-10/12 -translate-x-1/2 flex-col items-center gap-4 rounded-2xl bg-white p-4`}
      >
        {links}
      </nav>
    </div>
  );
}
