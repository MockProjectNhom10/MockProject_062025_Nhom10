import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "@chief-police/components/layout/SideBar";
import Footer from "@chief-police/components/layout/Footer";
import WarningModal from "@chief-police/components/common/popup/WarningModal";

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
    nav: "/initial-response",
  },
  {
    label: "Scene Information",
    subItems: [
      "Initial Statements",
      "Scene Description",
      "Images and Videos",
      "Preliminary Physical Evidence Information",
      "Scene Sketch",
    ],
    nav: "/scene-information",
  },
  {
    label: "Initial Investigation Report",
    subItems: [],
    nav: "/initial-investigation-report",
  },
];

const MainLayout = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [activeSubItem, setActiveSubItem] = useState(0);

  const handleSectionChange = (sectionIdx) => {
    setActiveSection(sectionIdx);
    setActiveSubItem(0); // Reset sub-item when section changes
  };

  const handleSubItemChange = (sectionIdx, subIdx) => {
    setActiveSection(sectionIdx);
    setActiveSubItem(subIdx);
  };

  return (
    <div className="max-tablet:pt-6 max-mobile:pt-0 flex min-h-screen flex-col bg-white pt-4">
      {/* Main area: sidebar + content */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar: block above content on mobile, left on desktop */}
        <SideBar
          sections={sections}
          onSectionChange={handleSectionChange}
          onSubItemChange={handleSubItemChange}
          activeSection={activeSection}
          activeSubItem={activeSubItem}
        />

        {/* Main content */}
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="mx-8 flex-1 overflow-auto">
            <Outlet context={{ setActiveSection, setActiveSubItem }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
