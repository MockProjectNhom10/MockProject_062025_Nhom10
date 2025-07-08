import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "@chief-police/components/layout/MainLayout";
import ChiefDashboard from "@chief-police/pages/ChiefDashboard";
import SceneManagementForm from "@chief-police/pages/SC_015_SceneManagementForm";
import SceneInformation from "@chief-police/pages/SC_017_SceneInformation";

const ChiefPoliceRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<ChiefDashboard />} />
        <Route path="/scene-management" element={<SceneManagementForm />} />
        <Route path="/scene-information" element={<SceneInformation/>} />
      </Route>
    </Routes>
  );
};

export default ChiefPoliceRoutes;

/* <TimePicker />
      <div className="w-1/3 h-1/3">a</div>
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
