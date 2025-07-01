import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "@patrol-police/pages/Dashboard";

const PatrolPoliceRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default PatrolPoliceRoutes;
