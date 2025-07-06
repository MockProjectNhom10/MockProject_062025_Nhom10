import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "@chief-police/components/layout/MainLayout";
import ChiefDashboard from "@chief-police/pages/ChiefDashboard";

const ChiefPoliceRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<ChiefDashboard />} />
      </Route>
    </Routes>
  );
};

export default ChiefPoliceRoutes;
