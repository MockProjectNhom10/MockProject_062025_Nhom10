
import FormSection from "@chief-police/components/sections/FormSection";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "@chief-police/components/layout/MainLayout";

const ChiefPoliceRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>

      </Route>
    </Routes>
  );
};

export default ChiefPoliceRoutes;
