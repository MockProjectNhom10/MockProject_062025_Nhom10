import StepProgress from "@public-reporter/components/common/StepProgress";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const CrimeReportPage = () => {
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const match = location.pathname.match(/step(\d+)/);
    setCurrentStep(match ? parseInt(match[1], 10) : 1);
  }, [location.pathname]);

  return (
    <div className="mx-auto w-full max-w-[1000px] px-10 sm:px-0">
      <h1 className="mb-10 text-center text-2xl font-bold">CRIME REPORT</h1>
      {/* stepper */}
      <StepProgress currentStep={currentStep} />
      {/* outlet */}
      <Outlet />
    </div>
  );
};

export default CrimeReportPage;
