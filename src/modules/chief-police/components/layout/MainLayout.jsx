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
    },
    {
        label: "Scene Information",
        subItems: [
            "Initial Statements",
            "Scene Description",
            "Images and Videos",
            "Preliminary Physical Evidence Information",
            "Scene Sketch"
        ],
    },
    {
        label: "Initial Investigation Report",
        subItems: [],
    },
];

const MainLayout = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleCancelClick = () => {
        setShowPopup(true);
    };

    const handlePopupCancel = () => {
        setShowPopup(false);
    };

    const handlePopupConfirm = () => {
        setShowPopup(false);
        console.log("Confirmed cancel.");
    };

    return (
        <div className="max-tablet:pt-6 flex min-h-screen flex-col bg-white pt-12">
            <div className="flex flex-1 flex-col md:flex-row gap-8 px-4">
                <SideBar sections={sections} />
                <main className="flex-1">
                    <Outlet />
                </main>
            </div>

            <Footer onCancelClick={handleCancelClick} />

            {showPopup && (
                <WarningModal
                    message="Are you sure you want to cancel? All changes will be lost."
                    onCancel={handlePopupCancel}
                    onConfirm={handlePopupConfirm}
                />
            )}
        </div>
    );
};

export default MainLayout;