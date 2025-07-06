// src/layouts/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "@chief-police/components/layout/Sidebar";
import Footer from "@chief-police/components/layout/Footer";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-white">
      <SideBar />
      <div className="flex flex-1 flex-col">
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
