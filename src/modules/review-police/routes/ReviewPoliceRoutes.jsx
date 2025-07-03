import React from "react";
import { Route, Routes } from "react-router-dom";
import CrimeReportList from "@review-police/pages/CrimeReportList";
import CrimeReportDetail from "@review-police/pages/CrimeReportDetail";

const ReviewPoliceRoutes = () => {
  return (
    <Routes>
      <Route index element={<CrimeReportList />} />
      <Route path="report-detail/:reportId" element={<CrimeReportDetail />} />
    </Routes>
  );
};

export default ReviewPoliceRoutes;
