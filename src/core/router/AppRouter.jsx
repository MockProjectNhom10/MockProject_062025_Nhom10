import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//Lazy loading of routes
const FinancialAnalystRoutes = React.lazy(() =>
  import("@financial-analyst/routes/FinancialAnalystRoutes")
);
const ChiefPoliceRoutes = React.lazy(() =>
  import("@chief-police/routes/ChiefPoliceRoutes")
);
const InvestigatorRoutes = React.lazy(() =>
  import("@investigator/routes/InvestigatorRoutes")
);
const ForensicRoutes = React.lazy(() =>
  import("@forensic/routes/ForensicRoutes")
);
const PatrolPoliceRoutes = React.lazy(() =>
  import("@patrol-police/routes/PatrolPoliceRoutes")
);
const PublicReporterRoutes = React.lazy(() =>
  import("@public-reporter/routes/PublicReporterRoutes")
);
const ReviewPoliceRoutes = React.lazy(() =>
  import("@review-police/routes/ReviewPoliceRoutes")
);
const AdminRoutes = React.lazy(() => import("@admin/routes/AdminRoutes"));

//Loading fallback
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

const AppRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Public routes - Don't need login */}
        <Route path="/public-reporter/*" element={<PublicReporterRoutes />} />

        {/* Protected routes - Haven't yet auth */}
        <Route path="/patrol-police/*" element={<PatrolPoliceRoutes />} />
        <Route path="/review-police/*" element={<ReviewPoliceRoutes />} />
        <Route path="/investigator/*" element={<InvestigatorRoutes />} />
        <Route path="/chief-police/*" element={<ChiefPoliceRoutes />} />
        <Route path="/forensic/*" element={<ForensicRoutes />} />
        <Route
          path="/financial-analyst/*"
          element={<FinancialAnalystRoutes />}
        />
        <Route path="/admin/*" element={<AdminRoutes />} />

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
