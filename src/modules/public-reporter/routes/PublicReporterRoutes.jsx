import Dashboard from "@public-reporter/pages/Dashboard";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "@layout/MainLayout";

const PublicReporterRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} /> 
        <Route path="dashboard" element={<Dashboard />} /> 
      </Route>
    </Routes>
  );
};

export default PublicReporterRoutes;
