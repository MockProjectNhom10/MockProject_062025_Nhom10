import React from "react";
import { ChevronDown, Search } from "lucide-react";
import { logo, logoHeader } from "../assets/index";
const Header = () => {
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

      {/* Navigation */}
      <nav className="tablet:flex-nowrap tablet:justify-center mobile:px-4 flex flex-wrap items-center justify-center overflow-x-auto p-2">
        {/* Links */}
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

        {/* Search bar */}
        <div className="tablet:w-48 tablet:mt-0 tablet:ml-8 relative mt-2 w-full">
          <Search className="pointer-events-none absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
          <input
            type="search"
            placeholder="Search"
            className="tablet:text-sm w-full rounded border py-1 pr-2 pl-8 text-xs"
            required
            id="default-search"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
