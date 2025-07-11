import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@core/auth/pages/Login";

//Lazy loading of routes
const FinancialAnalystRoutes = lazy(
  () => import("@expert/financial-analyst/routes/FinancialAnalystRoutes"),
);
const ChiefPoliceRoutes = lazy(
  () => import("@chief-police/routes/ChiefPoliceRoutes"),
);
const InvestigatorRoutes = lazy(
  () => import("@investigator/routes/InvestigatorRoutes"),
);
const ForensicRoutes = lazy(
  () => import("@expert/forensic/routes/ForensicRoutes"),
);
const PublicReporterRoutes = lazy(
  () => import("@public-reporter/routes/PublicReporterRoutes"),
);
const ReviewPoliceRoutes = lazy(
  () => import("@review-police/routes/ReviewPoliceRoutes"),
);

//Loading fallback
const Loading = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-500"></div>
  </div>
);

const AppRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Public routes - Don't need login */}
        <Route path="/public-reporter/*" element={<PublicReporterRoutes />} />

        {/* Protected routes - Haven't yet auth */}
        <Route path="/review-police/*" element={<ReviewPoliceRoutes />} />
        <Route path="/investigator/*" element={<InvestigatorRoutes />} />
        <Route path="/chief-police/*" element={<ChiefPoliceRoutes />} />
        <Route path="/forensic/*" element={<ForensicRoutes />} />
        <Route
          path="/financial-analyst/*"
          element={<FinancialAnalystRoutes />}
        />

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/public-reporter" replace />} />
        <Route
          path="*"
          element={
            <div className="p-8 text-center">404 - Trang không tồn tại</div>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
