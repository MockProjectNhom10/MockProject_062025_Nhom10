import FormCard from "@chief-police/components/sections/FormCard";
import FormSection from "@chief-police/components/sections/FormSection";
import GenericTable from "@chief-police/components/table/GenericTable";
import React from "react";
import { Form } from "react-router-dom";

const ChiefDashboard = () => {
  return (
    <FormSection title="INITIAL RESPONSE">
      <FormCard title="TIME OF DISPATCHING FORCES TO THE SCENE">
        <GenericTable
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
            {
              id: 1,
              name: "Nguyễn Văn A",
              email: "a@gmail.com",
              role: "Admin",
            },
            { id: 2, name: "Trần Thị B", email: "b@gmail.com", role: "User" },
          ]}
        />
      </FormCard>
      <FormCard title="TIME OF DISPATCHING FORCES TO THE SCENE">
        <GenericTable
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
            {
              id: 1,
              name: "Nguyễn Văn A",
              email: "a@gmail.com",
              role: "Admin",
            },
            { id: 2, name: "Trần Thị B", email: "b@gmail.com", role: "User" },
          ]}
        />
      </FormCard>
      <FormCard title="TIME OF DISPATCHING FORCES TO THE SCENE">
        <GenericTable
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
            {
              id: 1,
              name: "Nguyễn Văn A",
              email: "a@gmail.com",
              role: "Admin",
            },
            { id: 2, name: "Trần Thị B", email: "b@gmail.com", role: "User" },
          ]}
        />
      </FormCard>
    </FormSection>
  );
};

export default ChiefDashboard;
