import Dashboard from "@public-reporter/pages/Dashboard";
import SC_001_FormReportDetail from "@public-reporter/pages/SC_001_FormReportDetail";
import React from "react";
import { Route, Routes } from "react-router-dom";

const PublicReporterRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/form-report-detail" element={<SC_001_FormReportDetail />} />
    </Routes>
  );
};

export default PublicReporterRoutes;
