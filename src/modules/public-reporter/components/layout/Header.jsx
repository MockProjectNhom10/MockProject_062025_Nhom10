import React, { useState } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { logo, logoHeader } from "@public-reporter/assets/index";

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

      <div className="tablet:hidden flex w-full items-center justify-between gap-2 p-2">
        <button
          className="tablet:hidden order-1 text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
        >
          <Menu size={28} />
        </button>

        <div className="relative order-2 w-3/5 flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2 transform" />
          <input
            type="search"
            placeholder="Search"
            className="w-full rounded border bg-gray-200 py-1 pr-2 pl-8 text-xs"
            required
            id="default-search"
          />
        </div>
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
            <ul className="flex flex-col space-y-2 p-4">
              <li>
                <a
                  href="#"
                  className="text-reporter font-bold"
                  onClick={handleNavClick}
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold" onClick={handleNavClick}>
                  About
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold" onClick={handleNavClick}>
                  Bureaus
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold" onClick={handleNavClick}>
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold" onClick={handleNavClick}>
                  Stats
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold" onClick={handleNavClick}>
                  Policies
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}

      <div className="flex items-center justify-between">
        <nav className="tablet:flex-nowrap tablet:justify-center tablet:flex hidden flex-wrap items-center justify-center overflow-x-auto p-2">
          <ul className="tablet:space-x-2 mobile:text-sm tablet:text-base flex flex-wrap text-xs">
            <li className="tablet:space-x-2 flex items-center">
              <a href="#" className="text-reporter font-bold">
                Home
              </a>
              <span className="m-2 text-gray-300">|</span>
            </li>
            <li className="tablet:space-x-2 flex items-center space-x-0">
              <a href="#" className="font-semibold">
                About
              </a>
              <span className="m-2 text-gray-300">|</span>
            </li>
            <li className="tablet:space-x-2 flex items-center space-x-0">
              <a href="#" className="font-semibold">
                Bureaus
              </a>
              <span className="m-2 text-gray-300">|</span>
            </li>
            <li className="tablet:space-x-2 flex items-center space-x-0">
              <a href="#" className="font-semibold">
                Services
              </a>
              <span className="m-2 text-gray-300">|</span>
            </li>
            <li className="tablet:space-x-2 flex items-center space-x-0">
              <a href="#" className="font-semibold">
                Stats
              </a>
              <span className="m-2 text-gray-300">|</span>
            </li>
            <li className="flex items-center">
              <a href="#" className="font-semibold">
                Policies
              </a>
            </li>
          </ul>
        </nav>

        <div className="tablet:w-48 tablet:flex-1 tablet:ml-4 tablet:mt-0 tablet:mr-2 tablet:block relative mt-2 hidden w-full">
          <Search className="pointer-events-none absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2 transform" />
          <input
            type="search"
            placeholder="Search"
            className="tablet:text-sm w-full rounded border bg-gray-200 py-1 pr-2 pl-8 text-xs"
            required
            id="default-search-desktop"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
