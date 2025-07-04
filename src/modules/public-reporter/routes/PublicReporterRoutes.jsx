import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "@public-reporter/layout/MainLayout";
import HomePage from "@public-reporter/pages/HomePage";
import CrimeReportPage from "@public-reporter/pages/CrimeReportPage";
import SC_002_Step1ReporterInformation from "@public-reporter/pages/crime-report-steps/SC_002_Step1ReporterInformation";
import SC_003_Step2IncidentInformation from "@public-reporter/pages/crime-report-steps/SC_003_Step2IncidentInformation";
import SC_008_FormReportDetail from "@public-reporter/pages/SC_008_FormReportDetail";
import SC_006_Step3ReportList from "@public-reporter/pages/crime-report-steps/SC_006_Step3ReportList";

const PublicReporterRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/form-report-detail"
          element={<SC_008_FormReportDetail />}
        />
        <Route path="/report" element={<CrimeReportPage />}>
          <Route path="step1" element={<SC_002_Step1ReporterInformation />} />
          <Route path="step2" element={<SC_003_Step2IncidentInformation />} />
          <Route path="step3" element={<SC_006_Step3ReportList />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default PublicReporterRoutes;
