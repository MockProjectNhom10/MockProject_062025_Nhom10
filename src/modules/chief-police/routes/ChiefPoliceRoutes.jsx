import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "@chief-police/components/layout/MainLayout";
import ChiefDashboard from "@chief-police/pages/ChiefDashboard";
import ViewInitialStatement from "@chief-police/pages/SC_022_ViewIntinalStatement";

import SC_016_InitialResponse from "@chief-police/pages/SC_016_InitialResponse";
import SC_018_InformationProtectionField from "@chief-police/pages/SC_018_InformationProtectionField";
import SC_013_PreliminaryInvestigation from "@chief-police/pages/SC_013_PreliminaryInvestigation";

import SC_023 from "@chief-police/pages/SC_023";


import SC_020_PreliminaryEvidence from "@chief-police/pages/SC_020_PreliminaryEvidence";

import SceneManagementForm from "@chief-police/pages/SC_015_SceneManagementForm";



const ChiefPoliceRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        <Route path="/" element={<SC_023 />} />

        <Route path="/" element={<ChiefDashboard />} />

        <Route path="/ViewInitialStatement" element={<ViewInitialStatement />} />

        <Route path="/" element={<SC_013_PreliminaryInvestigation />} />

        <Route
          path="/preliminary-evidence"
          element={<SC_020_PreliminaryEvidence />}
        />

        <Route path="/scene-management" element={<SceneManagementForm />} />


      </Route>
    </Routes>
  );
};

export default ChiefPoliceRoutes;

/* <TimePicker />
      <div className="h-1/3 w-1/3">a</div>
      <DatePicker /> */
/* <DragAndDropUpload /> */
/* <FormSection /> */
/* <GenericTable
        title="Danh sách người dùng (Users)"
        columns={[
          { header: "Họ tên", accessor: "name" },
          { header: "Email", accessor: "email" },
          { header: "Vai trò", accessor: "role" },
          {
            header: "Chi tiết",
          },
        ]}
        data={[
          { id: 1, name: "Nguyễn Văn A", email: "a@gmail.com", role: "Admin" },
          { id: 2, name: "Trần Thị B", email: "b@gmail.com", role: "User" },
        ]}
      /> */
