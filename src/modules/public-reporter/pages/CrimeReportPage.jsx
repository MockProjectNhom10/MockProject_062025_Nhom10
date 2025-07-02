import StepProgress from "@public-reporter/components/StepProgress";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const CrimeReportPage = () => {
  const location = useLocation();

  // Mapping URL path to currentStep
  const path = location.pathname;
  let currentStep = 1;
  if (path.includes("step-2")) currentStep = 2;
  else if (path.includes("status")) currentStep = 3;

  return (
    <div className="mx-auto w-full max-w-[700px] px-10 sm:px-0">
      <h1 className="mb-10 text-center text-2xl font-bold">CRIME REPORT</h1>
      <StepProgress currentStep={currentStep} />
      <Outlet />
    </div>
  );
};

export default CrimeReportPage;
