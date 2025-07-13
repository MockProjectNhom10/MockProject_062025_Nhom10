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
import { useNavigate } from "react-router-dom";

const SC_016_InitialResponse = () => {
  const navigate = useNavigate();
  const actionButtonsTwoOptions = [
    {
      label: "Delete",
      color: "red",
    },
    {
      label: "Edit",
      color: "green",
    },
  ];
  const actionButtonsThreeOptions = [
    {
      label: "Delete",
      color: "red",
    },
    {
      label: "Edit",
      color: "green",
    },
    {
      label: "View",
      color: "gray",
    },
  ];

  const onClickNext = () => {
    navigate("/chief-police/scene-information");
  };
  return (
    <>
      <FormSection
        title="INITIAL RESPONSE"
        footerCancel
        footerSave
        footerNext
        onClickNext={onClickNext}
      >
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
            <Button
              classNameChildren="flex flex-nowrap gap-2"
              onClick={() => navigate("add-patrol")}
            >
              Add {<PlusCircle className="h-4 w-4" />}
            </Button>
          }
        >
          <GenericTable
            columns={[
              { header: "Fullname", accessor: "name" },
              { header: "Phone number", accessor: "phone" },
              { header: "Role", accessor: "role" },
              {
                header: "Details",
              },
            ]}
            data={[
              {
                id: 1,
                name: "Nguyễn Văn A",
                phone: "0123456789",
                role: "Admin",
              },
              { id: 2, name: "Trần Thị B", phone: "0377736789", role: "User" },
            ]}
          />
        </FormCard>
        <FormCard
          classNameHeader="mb-4"
          title="PRELIMINARY ASSESSMENT OF THE SCENE SITUATION"
        >
          <TextArea />
        </FormCard>
        <FormCard
          classNameHeader="mb-4"
          title="SCENE PRESERVATION MEASURES TAKEN"
          button={
            <Button
              onClick={() => navigate("information-protection-field")}
              classNameChildren="flex flex-nowrap gap-2"
            >
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
            <Button
              classNameChildren="flex flex-nowrap gap-2"
              onClick={() => navigate("medical-rescue-support")}
            >
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
