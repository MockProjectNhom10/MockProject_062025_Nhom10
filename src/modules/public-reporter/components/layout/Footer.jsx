import React from "react";
import logo from "@public-reporter/assets/Logo-NYC.png";

export default function Footer() {
  return (
    <footer className="bg-reporter px-6 py-8 text-white">
      <div className="mobile:grid-cols-2 tablet:grid-cols-4 mx-auto grid grid-cols-1 gap-8">
        {/* Column 1 */}
        <div className="space-y-2">
          <p className="font-semibold">Directory Of City Agencies</p>
          <p>Notify NYC</p>
          <p>NYC Mobile Apps</p>
        </div>

        {/* Column 2 */}
        <div className="space-y-2">
          <p className="font-semibold">Contact NYC Government</p>
          <p>CityStore</p>
          <p>Maps</p>
        </div>

        {/* Column 3 */}
        <div className="space-y-2">
          <p className="font-semibold">City Employees</p>
          <p>Stay Connected</p>
          <p>Resident Toolkit</p>
        </div>

        {/* Column 4: Logo, Search, Footer Text */}
        <div className="flex flex-col gap-4">
          {/* Logo and Search */}
          <div className="desktop:flex-row flex flex-col items-start gap-4">
            <img src={logo} alt="logo" className="h-6" />
            <div className="mobile:w-full relative w-[90%] overflow-hidden rounded-full bg-[#C2C6E8]">
              <input
                type="text"
                placeholder="Search"
                className="rounded-full py-1 pr-10 pl-4 text-black outline-none"
              />
              <span className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500">
                🔍
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-1 text-xs text-gray-200">
            <p>City of New York. 2025 All Rights Reserved.</p>
            <p>NYC is a trademark and service mark of the City of New York</p>
            <p>
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .{" "}
              <a href="#" className="underline">
                Terms of Use
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
