import React, { useState } from "react";
import LogoNYC from "@review-police/assets/images/logoNYC.png";
import {
  House,
  MessageSquareWarning,
  FileText,
  LogOut,
  LayoutDashboard,
  X,
} from "lucide-react";

function SideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { icon: <House />, label: "Dashboard" },
    { icon: <MessageSquareWarning />, label: "Reports", active: true },
    { icon: <FileText />, label: "Cases" },
  ];

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="absolute z-50 p-2 rounded-full shadow bg-police top-2 left-25 md:hidden"
      >
        <LayoutDashboard className="w-3 h-3 text-black cursor-pointer" />
      </button>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      <div className={`bg-police fixed top-0 left-0 z-50 h-full rounded-r-xl p-4 text-white transition-all duration-300 ease-in-out ${collapsed ? "w-20" : "w-64"} ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:static md:flex md:translate-x-0 md:flex-col`}>
        <div className="flex items-center justify-between md:hidden">
          <img src={LogoNYC} alt="logoNYC" className="w-20" />
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30">
            <X />
          </button>
        </div>

        <div className="items-center justify-between hidden md:flex">
          {!collapsed && <img src={LogoNYC} alt="logoNYC" className="w-20" />}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30">
            <LayoutDashboard className="text-white cursor-pointer" />
          </button>
        </div>

        <nav className="flex flex-col gap-2 mt-12">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex cursor-pointer items-center rounded-2xl p-2 transition-all duration-200 ease-in-out ${
                item.active ? "bg-white/30" : "text-white hover:bg-white/10"
              }`}
              title={collapsed ? item.label : ""}
            >
              {item.icon}
              {!collapsed && (
                <p className="ml-2 text-base font-medium">{item.label}</p>
              )}
            </div>
          ))}
        </nav>

        <div
          className="absolute flex items-center px-4 py-2 cursor-pointer bottom-5 rounded-2xl hover:bg-white/10"
          title={collapsed ? "Logout" : ""}>
          <LogOut />
          {!collapsed && <p className="ml-2 text-base font-medium">Logout</p>}
        </div>
      </div>
    </>
  );
}

export default SideBar;
