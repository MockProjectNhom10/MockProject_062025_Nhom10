import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "@public-reporter/layout/MainLayout";
import Dashboard from "@public-reporter/pages/Dashboard";
import SC_001_FormReportDetail from "@public-reporter/pages/SC_001_FormReportDetail";
import CrimeReportPage from "@public-reporter/pages/CrimeReportPage";
import Step1ReporterInfo from "@public-reporter/pages/crime-report-steps/Step1ReporterInformation";
import Step2ReporterInfo from "@public-reporter/pages/crime-report-steps/Step2ReporterInformation";

const PublicReporterRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/report" element={<CrimeReportPage />}>
          <Route path="step1" element={<Step1ReporterInfo />} />
           <Route path="step2" element={<Step2ReporterInfo/>} />
        </Route>
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/form-report-detail" element={<SC_001_FormReportDetail />} />
    </Routes>
  );
};

export default PublicReporterRoutes;
