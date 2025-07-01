import React from "react";
import { Outlet } from "react-router-dom";

const CrimeReportPage = () => {
  return (
    <div className="mx-auto w-full max-w-[700px] px-10 sm:px-0">
      <h1 className="text-center text-2xl font-bold">CRIME REPORT</h1>
      {/* stepper */}

      {/* outlet */}
      <Outlet />
    </div>
  );
};

export default CrimeReportPage;
