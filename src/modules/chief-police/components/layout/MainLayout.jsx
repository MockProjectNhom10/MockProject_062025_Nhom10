// src/layouts/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "@chief-police/components/layout/SideBar";
import Footer from "@chief-police/components/layout/Footer";

// Define the sections data outside the component
const sections = [
  {
    label: "Initial Response",
    subItems: [
      "Time of dispatching forces to the scene",
      "Time of arrival at the scene",
      "List of officers assigned to the scene",
      "Preliminary assessment of the scene situation",
      "Scene preservation measures taken",
      "Information on medical/rescue support provided",
    ],
  },
  {
    label: "Scene Information",
    subItems: [],
  },
  {
    label: "Initial Investigation Report",
    subItems: [],
  },
];

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Main area: sidebar + content */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar: block above content on mobile, left on desktop */}
        <SideBar sections={sections} />
        {/* Main content */}
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex-1 overflow-auto p-2 sm:p-4 md:p-6">
            <Outlet />
          </div>
        </div>
      </div>
      {/* Footer always at the very bottom, full width */}
      <Footer />
    </div>
  );
};

export default MainLayout;
