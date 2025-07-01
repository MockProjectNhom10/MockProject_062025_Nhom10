import React from "react";
import { House, ChevronRight, Bell, Search } from "lucide-react";
import avatar from "@review-police/assets/images/avatar.png";

function Header() {
  return (
    <div className="flex items-center justify-between gap-2 px-4 py-2 shadow-sm md:px-10">
      <div className="flex items-center min-w-0 gap-3">
        <div className="flex flex-col justify-center">
          <h1 className="text-lg font-bold truncate md:text-2xl text-police">
            Reports
          </h1>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <House className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
            <span>Reports</span>
          </div>
        </div>
      </div>

      <div className="flex items-center min-w-0 gap-3">
        <div className="relative w-32 sm:w-48 md:w-64">
          <input
            type="text"
            placeholder="Search Task"
            className="w-full py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-police"
          />
          <Search className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 top-1/2 left-3" />
        </div>

        <div className="p-2 text-gray-600 border border-gray-300 rounded-full cursor-pointer hover:bg-gray-100">
          <Bell className="w-5 h-5" />
        </div>

        <div className="flex items-center gap-2">
          <img
            src={avatar}
            alt="profile"
            className="object-cover w-10 h-10 rounded-full"
          />
          <div className="hidden leading-tight sm:block">
            <div className="text-sm font-semibold text-gray-800">John Desk</div>
            <div className="text-xs text-gray-500">Review Police</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
