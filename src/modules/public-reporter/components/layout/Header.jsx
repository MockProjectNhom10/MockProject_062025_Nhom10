import React, { useState } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { logo, logoHeader } from "@public-reporter/assets/index";

const navLinks = [
  { label: "Home", className: "text-reporter font-bold" },
  { label: "About", className: "font-semibold" },
  { label: "Bureaus", className: "font-semibold" },
  { label: "Services", className: "font-semibold" },
  { label: "Stats", className: "font-semibold" },
  { label: "Policies", className: "font-semibold" },
];

const NavigationList = ({ onClick, isMobile }) => (
  <ul
    className={
      isMobile
        ? "flex flex-col space-y-2 p-4"
        : "tablet:space-x-2 mobile:text-sm tablet:text-base flex flex-wrap text-xs"
    }
  >
    {navLinks.map((link, idx) => (
      <li
        key={link.label}
        className={
          !isMobile && idx !== navLinks.length - 1
            ? "tablet:space-x-2 flex items-center space-x-0"
            : "flex items-center"
        }
      >
        <a href="#" className={link.className} onClick={onClick}>
          {link.label}
        </a>
        {!isMobile && idx !== navLinks.length - 1 && (
          <span className="m-2 text-gray-300">|</span>
        )}
      </li>
    ))}
  </ul>
);

const SearchInput = ({ id, className = "" }) => (
  <div className={`relative ${className}`}>
    <Search className="pointer-events-none absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2 transform" />
    <input
      type="search"
      placeholder="Search"
      className="w-full rounded border bg-gray-200 py-1 pr-2 pl-8 text-xs"
      required
      id={id}
    />
  </div>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="tablet:text-sm tablet:px-20 bg-reporter flex items-center justify-between px-2 py-1 text-xs text-white">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="NYC Logo" className="tablet:h-6 h-4" />
          <span className="mobile:inline hidden text-xs font-bold">
            New York City Police Department
          </span>
        </div>
        <button className="flex items-center space-x-1 font-bold">
          <span>English</span>
          <ChevronDown size={18} color="#ffffff" className="font-bold" />
        </button>
      </div>

      {/* Logo area */}
      <div className="flex h-24 items-center justify-center border-b">
        <img src={logoHeader} alt="NYPD Shield" className="flex items-center" />
      </div>

      <div className="tablet:hidden flex w-full items-center justify-between gap-2 px-2 py-4">
        <button
          className="tablet:hidden order-1 text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
        >
          <Menu size={28} />
        </button>
        <SearchInput id="default-search" className="order-2 w-3/5 flex-1" />
      </div>

      {/* Sliding mobile menu overlay */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="bg-opacity-40 tablet:hidden fixed inset-0 z-40 bg-gray-400"
            onClick={() => setMenuOpen(false)}
          ></div>
          {/* Sliding menu */}
          <nav
            className={`tablet:hidden fixed top-0 left-0 z-50 h-full w-64 transform bg-white shadow-lg transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"} `}
          >
            <div className="flex items-center justify-between border-b p-4">
              <span className="text-lg font-bold">Menu</span>
              <button
                className="text-gray-700 focus:outline-none"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <X size={28} />
              </button>
            </div>
            <NavigationList onClick={handleNavClick} isMobile />
          </nav>
        </>
      )}

      <div className="max-w-screen-tablet tablet:px-4 tablet:py-8 mx-auto flex items-center justify-between">
        <nav className="tablet:flex-nowrap tablet:justify-center tablet:flex hidden flex-wrap items-center justify-center overflow-x-auto p-2">
          <NavigationList isMobile={false} />
        </nav>
        <div className="tablet:w-48 tablet:flex-1 tablet:ml-4 tablet:mt-0 tablet:mr-2 tablet:block relative mt-2 hidden w-full">
          <SearchInput id="default-search-desktop" className="tablet:text-sm" />
        </div>
      </div>
    </header>
  );
};

export default Header;
