import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "@patrol-police/pages/Dashboard";

const PatrolPoliceRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default PatrolPoliceRoutes;
