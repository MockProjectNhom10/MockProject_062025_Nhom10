import React, { useState } from "react";
import SideBarPhase3 from "./SideBarPhase3";
import { Outlet } from "react-router-dom";

const mockUser = {
  id: "CA000123",
  name: "Mr Jone Kevin",
  avatar: "",
};

const mockFeatures = [
  { key: "police-officers", label: "Police officers" },
  { key: "search-warrants", label: "Search Warrants" },
  { key: "list-cases", label: "List of cases" },
  {
    key: "preliminary-investigation",
    label: "List of Preliminary Investigation Cases",
  },
];

const MainLayoutPhase3 = () => {
  const [activeFeature, setActiveFeature] = useState("list-cases");

  return (
    <div className="flex min-h-screen bg-transparent">
      {/* Sidebar */}
      <SideBarPhase3
        user={mockUser}
        features={mockFeatures}
        activeFeature={activeFeature}
        onFeatureClick={setActiveFeature}
      />
      {/* Main content */}
      <div className="flex-1 overflow-auto p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayoutPhase3;
