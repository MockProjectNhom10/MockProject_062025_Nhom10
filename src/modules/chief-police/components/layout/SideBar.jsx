import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, X, Menu } from "lucide-react";

function SideBar({
  sections,
  onSectionChange,
  onSubItemChange,
  activeSection: controlledActiveSection,
  activeSubItem: controlledActiveSubItem,
}) {
  // Responsive sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
      if (window.innerWidth >= 768) setSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fallback to empty array if no sections provided
  const sidebarData = sections || [];

  // Internal state if not controlled
  const [openSections, setOpenSections] = useState(
    sidebarData.map((_, i) => i === 0),
  );
  const [internalActiveSection, setInternalActiveSection] = useState(0);
  const [internalActiveSubItem, setInternalActiveSubItem] = useState(0);

  const activeSection =
    controlledActiveSection !== undefined
      ? controlledActiveSection
      : internalActiveSection;
  const activeSubItem =
    controlledActiveSubItem !== undefined
      ? controlledActiveSubItem
      : internalActiveSubItem;

  const handleSectionClick = (idx) => {
    setOpenSections((prev) =>
      prev.map((open, i) => (i === idx ? !open : open)),
    );
    if (onSectionChange) onSectionChange(idx);
    if (controlledActiveSection === undefined) setInternalActiveSection(idx);
    if (controlledActiveSubItem === undefined) setInternalActiveSubItem(0);
  };

  const handleSubItemClick = (sectionIdx, subIdx) => {
    if (onSubItemChange) onSubItemChange(sectionIdx, subIdx);
    if (controlledActiveSection === undefined)
      setInternalActiveSection(sectionIdx);
    if (controlledActiveSubItem === undefined) setInternalActiveSubItem(subIdx);
  };

  return (
    <>
      {/* Hamburger button: only on mobile */}
      {!isDesktop && (
        <div className="m-4 md:hidden">
          <button
            className="bg-police flex h-10 w-10 items-center justify-center rounded text-white"
            onClick={() => setSidebarOpen((open) => !open)}
          >
            {sidebarOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      )}

      {/* Sidebar: always on desktop, toggled on mobile */}
      {(isDesktop || sidebarOpen) && (
        <aside className="max-desktop:max-w-xs max-tablet:mb-4 max-tablet:max-w-full max-tablet:mx-0 max-mobile:w-full relative ml-8 flex w-xs max-w-md flex-col rounded-lg border-1 border-gray-200 bg-white shadow-md">
          <nav className="flex flex-col gap-3">
            {sidebarData.map((section, idx) => {
              const isActive = activeSection === idx;
              return (
                <div key={section.label} className="">
                  <button
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-2 text-left font-semibold ${isActive ? "bg-police text-white" : "bg-gray-400 text-white"} transition-colors`}
                    onClick={() => handleSectionClick(idx)}
                  >
                    <span className="text-md flex items-center gap-2">
                      {isActive ? (
                        <ChevronDown className="h-5 w-5" />
                      ) : (
                        <ChevronRight className="h-5 w-5" />
                      )}
                      {section.label}
                    </span>
                  </button>
                  {section.subItems &&
                    section.subItems.length > 0 &&
                    isActive && (
                      <ul className="mt-1 ml-8 flex flex-col gap-1 rounded bg-white p-2 shadow">
                        {section.subItems.map((sub, subIdx) => (
                          <li key={sub}>
                            <button
                              className={`w-full rounded-xl px-3 py-2 text-left text-sm ${activeSubItem === subIdx ? "font-bold" : "font-normal"} text-gray-800 hover:bg-gray-100`}
                              onClick={() => handleSubItemClick(idx, subIdx)}
                            >
                              {sub}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                </div>
              );
            })}
          </nav>
        </aside>
      )}
    </>
  );
}

export default SideBar;
