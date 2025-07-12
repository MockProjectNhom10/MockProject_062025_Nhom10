import CustomDatePicker from "@chief-police/components/common/date-time/DatePicker";
import TimePicker from "@chief-police/components/common/date-time/TimePicker";
import FormCard from "@chief-police/components/sections/FormCard";
import FormSection from "@chief-police/components/sections/FormSection";
import GenericTable from "@chief-police/components/table/GenericTable";
import Button from "@chief-police/components/common/button/Button";
import React from "react";
import { CircleArrowRight, Pen, Plus, PlusCircle, Trash } from "lucide-react";
import TextArea from "@chief-police/components/common/input/TextArea";
import ActionButtons from "@chief-police/components/common/button/ActionButtons";

const SC_016_InitialResponse = () => {
  const actionButtonsTwoOptions = [
    {
      label: "Delete",
      color: "red",
    },
    {
      label: "Edit",
      color: "teal",
    },
  ];
  const actionButtonsThreeOptions = [
    {
      label: "Delete",
      color: "red",
    },
    {
      label: "Edit",
      color: "teal",
    },
    {
      label: "View",
      color: "gray",
    },
  ];
  return (
    <>
      <FormSection title="INITIAL RESPONSE">
        <FormCard
          title="TIME OF DISPATCHING FORCES TO THE SCENE"
          button={<CustomDatePicker />}
        ></FormCard>
        <FormCard
          title="TIME OF ARRIVAL AT THE SCENE"
          button={<TimePicker />}
        ></FormCard>

        <FormCard
          classNameHeader="mb-4"
          title="LIST OF OFFICERS ASSIGNED TO THE SCENE"
          button={
            <Button classNameChildren="flex flex-nowrap gap-2">
              Add {<PlusCircle className="h-4 w-4" />}
            </Button>
          }
        >
          <GenericTable
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
        <FormCard
          classNameHeader="mb-4"
          title="PRELIMINARY ASSESSMENT OF THE SCENE SITUATION"
          button={
            <Button classNameChildren="flex flex-nowrap gap-2">
              Add {<PlusCircle className="h-4 w-4" />}
            </Button>
          }
        >
          <TextArea />
        </FormCard>
        <FormCard
          classNameHeader="mb-4"
          title="SCENE PRESERVATION MEASURES TAKEN"
          button={
            <Button classNameChildren="flex flex-nowrap gap-2">
              Add {<PlusCircle className="h-4 w-4" />}
            </Button>
          }
        >
          <GenericTable
            columns={[
              { header: "#", accessor: "index" },
              {
                header: "Preservation Measures",
                accessor: "preservationMeasures",
              },
              {
                accessor: "actions",
              },
            ]}
            data={[
              {
                index: 1,
                preservationMeasures:
                  "Immediate perimeter established using police tape (approx. 30-meter radius)",
                actions: <ActionButtons actions={actionButtonsTwoOptions} />,
              },
              {
                index: 2,
                preservationMeasures:
                  "Vehicle stabilized to prevent further movement.",
                actions: <ActionButtons actions={actionButtonsTwoOptions} />,
              },
              {
                index: 3,
                preservationMeasures:
                  "Photographic documentation of the scene commenced at 22:26.",
                actions: <ActionButtons actions={actionButtonsTwoOptions} />,
              },
            ]}
          />
        </FormCard>
        <FormCard
          classNameHeader="mb-4"
          title="INFORMATION ON MEDICAL/RESCUE SUPPORT PROVIDED"
          button={
            <Button classNameChildren="flex flex-nowrap gap-2">
              Add {<PlusCircle className="h-4 w-4" />}
            </Button>
          }
        >
          <GenericTable
            columns={[
              { header: "Medical/Rescue Unit ID", accessor: "unitID" },
              {
                header: "Type of Support Provided",
                accessor: "supportType",
              },
              {
                header: "Time of Arrival",
                accessor: "arrivalTime",
              },
              {
                accessor: "actions",
              },
            ]}
            data={[
              {
                unitID: "MRS-001",
                supportType: "Medical Assistance",
                arrivalTime: "22:30",
                actions: <ActionButtons actions={actionButtonsThreeOptions} />,
              },
              {
                unitID: "RSC-002",
                supportType: "Rescue Operations",
                arrivalTime: "22:35",
                actions: <ActionButtons actions={actionButtonsThreeOptions} />,
              },
              {
                unitID: "MRS-003",
                supportType: "Medical Assistance",
                arrivalTime: "22:40",
                actions: <ActionButtons actions={actionButtonsThreeOptions} />,
              },
            ]}
          />
        </FormCard>
      </FormSection>
    </>
  );
};

export default SC_016_InitialResponse;
