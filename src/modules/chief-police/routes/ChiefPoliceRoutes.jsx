import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "@chief-police/components/layout/MainLayout";
import SC_016_InitialResponse from "@chief-police/pages/SC_016_InitialResponse";
import SC_014_AddPartrol from "@chief-police/pages/SC_014_AddPatrol";
import SC_018_InformationProtectionField from "@chief-police/pages/SC_018_InformationProtectionField";
import SC_017_SceneInformation from "@chief-police/pages/SC_017_SceneInformation";
import SC_046_FiedlReportSummary from "@chief-police/pages/SC_046_FieldReportSummary";
import SC_067_MedicalRescueSupport from "@chief-police/pages/SC_067_MedicalRescueSupport";

const ChiefPoliceRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<SC_016_InitialResponse />} />
        {/*Step 1 */}
        <Route path="/initial-response" element={<SC_016_InitialResponse />} />
        <Route
          path="/initial-response/add-patrol"
          element={<SC_014_AddPartrol />}
        />
        <Route
          path="/initial-response/information-protection-field"
          element={<SC_018_InformationProtectionField />}
        />
        <Route
          path="/initial-response/medical-rescue-support"
          element={<SC_067_MedicalRescueSupport />}
        />
        {/*Step 2*/}
        <Route
          path="/scene-information"
          element={<SC_017_SceneInformation />}
        />
        {/*Step 3*/}
        <Route
          path="/initial-investigation-report"
          element={<SC_046_FiedlReportSummary />}
        />
      </Route>
    </Routes>
  );
};

export default ChiefPoliceRoutes;
