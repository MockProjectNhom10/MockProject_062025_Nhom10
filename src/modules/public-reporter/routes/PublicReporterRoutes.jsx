import MainLayout from "@public-reporter/layout/MainLayout";
import Dashboard from "@public-reporter/pages/Dashboard";
import HomeReporterPage from "@public-reporter/pages/HomeReporterPage";
import React from "react";
import { Route, Routes } from "react-router-dom";

const PublicReporterRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomeReporterPage />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default PublicReporterRoutes;
