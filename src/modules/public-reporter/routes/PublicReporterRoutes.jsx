import Dashboard from "@public-reporter/pages/Dashboard";
import React from "react";
import { Route, Routes } from "react-router-dom";

const PublicReporterRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default PublicReporterRoutes;
