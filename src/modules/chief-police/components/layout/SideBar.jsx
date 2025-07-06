import React, { useState } from "react";
import LogoNYC from "@chief-police/assets/images/logoNYC.png";
import {
  Shield,
  Camera,
  ClipboardList,
  LogOut,
  LayoutDashboard,
  X,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    {
      icon: <Shield />,
      label: "Initial Response",
      active: true,
      path: "/initial-response",
      children: [
        {
          label: "Time of dispatching forces to the scene",
          path: "/initial-response/dispatch-time",
        },
        {
          label: "Time of arrival at the scene",
          path: "/initial-response/arrival-time",
        },
        {
          label: "List of officers assigned to the scene",
          path: "/initial-response/officers-assigned",
        },
        {
          label: "Preliminary assessment of the scene situation",
          path: "/initial-response/preliminary-assessment",
        },
        {
          label: "Scene preservation measures taken",
          path: "/initial-response/preservation-measures",
        },
        {
          label: "Information on medical/rescue support provided",
          path: "/initial-response/medical-support",
        },
      ],
    },
    {
      icon: <Camera />,
      label: "Scene Information",
      path: "/scene-information",
      children: [
        {
          label: "Crime scene description",
          path: "/scene-information/description",
        },
        {
          label: "Scene photographs",
          path: "/scene-information/photographs",
        },
        {
          label: "Scene sketches and diagrams",
          path: "/scene-information/sketches",
        },
        {
          label: "Weather and environmental conditions",
          path: "/scene-information/conditions",
        },
        {
          label: "Evidence collection log",
          path: "/scene-information/evidence-log",
        },
      ],
    },
    {
      icon: <ClipboardList />,
      label: "Initial Investigation Report",
      path: "/investigation-report",
      children: [
        {
          label: "Incident summary",
          path: "/investigation-report/summary",
        },
        {
          label: "Witness statements",
          path: "/investigation-report/witnesses",
        },
        {
          label: "Suspect information",
          path: "/investigation-report/suspects",
        },
        {
          label: "Victim information",
          path: "/investigation-report/victims",
        },
        {
          label: "Initial findings",
          path: "/investigation-report/findings",
        },
        {
          label: "Recommendations for further investigation",
          path: "/investigation-report/recommendations",
        },
      ],
    },
  ];

  const toggleExpanded = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="bg-police absolute top-2 left-25 z-50 rounded-full p-2 shadow md:hidden"
      >
        <LayoutDashboard className="h-3 w-3 cursor-pointer text-black" />
      </button>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      <div
        className={`bg-police fixed top-0 left-0 z-50 flex h-full flex-col rounded-r-xl text-white transition-all duration-300 ease-in-out ${collapsed ? "w-20" : "w-96"} ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:static md:flex md:translate-x-0`}
      >
        {/* HEADER - Cố định trên cùng */}
        <div className="flex-shrink-0 p-4">
          <div className="flex items-center justify-between md:hidden">
            <img src={LogoNYC} alt="logoNYC" className="w-20" />
            <button
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-white/20 p-2 hover:bg-white/30"
            >
              <X />
            </button>
          </div>

          <div className="hidden items-center justify-between md:flex">
            {!collapsed && <img src={LogoNYC} alt="logoNYC" className="w-20" />}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="rounded-full bg-white/20 p-2 hover:bg-white/30"
            >
              <LayoutDashboard className="cursor-pointer text-white" />
            </button>
          </div>
        </div>

        {/* NAVIGATION - Có scroll riêng */}
        <nav className="scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent flex-1 overflow-y-auto px-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item, idx) => (
              <div key={idx}>
                {/* Main menu item */}
                <div
                  className={`flex cursor-pointer items-center rounded-2xl p-4 transition-all duration-200 ease-in-out ${
                    item.active ? "bg-white/30" : "text-white hover:bg-white/10"
                  }`}
                  onClick={() => {
                    if (item.children) {
                      toggleExpanded(idx);
                    } else {
                      navigate(item.path);
                      // Đóng mobile menu khi navigate
                      setMobileOpen(false);
                    }
                  }}
                  title={collapsed ? item.label : ""}
                >
                  {item.icon}
                  {!collapsed && (
                    <>
                      <p className="ml-2 flex-1 text-lg font-medium">
                        {item.label}
                      </p>
                      {item.children && (
                        <ChevronDown
                          className={`transform transition-transform ${
                            expandedItems[idx] ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </>
                  )}
                </div>

                {/* Sub-menu items */}
                {item.children && expandedItems[idx] && !collapsed && (
                  <div className="mt-2 ml-6 space-y-1">
                    {item.children.map((child, childIdx) => (
                      <div
                        key={childIdx}
                        className="flex cursor-pointer items-center rounded-xl p-4 text-white/80 hover:bg-white/10 hover:text-white"
                        onClick={() => {
                          navigate(child.path);
                          setMobileOpen(false);
                        }}
                      >
                        <span className="text-md">{child.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* FOOTER - Cố định dưới cùng */}
        <div className="flex-shrink-0 p-4">
          <div
            className="flex cursor-pointer items-center rounded-2xl px-4 py-2 hover:bg-white/10"
            title={collapsed ? "Logout" : ""}
          >
            <LogOut />
            {!collapsed && <p className="ml-2 text-base font-medium">Logout</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
