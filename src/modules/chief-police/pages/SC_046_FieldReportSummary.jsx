import ActionButtons from "@chief-police/components/common/button/ActionButtons";
import Button from "@chief-police/components/common/button/Button";
import Dropdown from "@chief-police/components/common/dropdown/DropDown";
import TextArea from "@chief-police/components/common/input/TextArea";
import FormCard from "@chief-police/components/sections/FormCard";
import FormSection from "@chief-police/components/sections/FormSection";
import GenericTable from "@chief-police/components/table/GenericTable";
import { CircleArrowRight, CircleChevronRight } from "lucide-react";
import React from "react";
import { Form } from "react-router-dom";
import { useToast } from "@core/hooks/useToast";

const SC_018_InformationProtectionField = () => {
  const { showSuccess, showLoading } = useToast();

  const handleClickSave = () => {
    showLoading("Saving information...");
    setTimeout(() => {
      showSuccess("Information saved successfully!");
    }, 1000);
  };

  const handleClickExcalate = () => {
    showLoading("Excalating information...");
    setTimeout(() => {
      showSuccess("Information excalated successfully!");
    }, 1000);
  };
  return (
    <>
      <FormSection
        title="FIELD REPORT SUMMARY"
        footerSave
        footerExcalate
        onClickSave={handleClickSave}
        onClickExcalate={handleClickExcalate}
      >
        <FormCard
          title="INITIAL RESPONE"
          classNameHeader="mt-2"
          button={<Button>Detail</Button>}
        ></FormCard>
        <FormCard
          title="SCENE INFORMATION  / INITIAL INVESTIGATION REPORT"
          classNameHeader="mt-2"
          button={<Button>Detail</Button>}
        ></FormCard>
        <FormCard classNameHeader="mb-4 mt-2" title="REPORT DETAIL">
          <TextArea />
        </FormCard>
        <FormCard
          classNameHeader="mb-4"
          title="INFORMATION ON MEDICAL/RESCUE SUPPORT PROVIDED"
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
                actions: (
                  <CircleChevronRight className="h-4 w-4 text-gray-600" />
                ),
              },
              {
                unitID: "RSC-002",
                supportType: "Rescue Operations",
                arrivalTime: "22:35",
                actions: (
                  <CircleChevronRight className="h-4 w-4 text-gray-600" />
                ),
              },
              {
                unitID: "MRS-003",
                supportType: "Medical Assistance",
                arrivalTime: "22:40",
                actions: (
                  <CircleChevronRight className="h-4 w-4 text-gray-600" />
                ),
              },
            ]}
          />
        </FormCard>
        <FormCard
          classNameHeader="mb-4"
          button={
            <div className="flex items-center justify-between space-x-2">
              <span className="text-sm text-gray-500">Level Assessment </span>
              <Dropdown></Dropdown>
            </div>
          }
          title="LEVEL ASSESSMENT"
        >
          <TextArea></TextArea>
        </FormCard>
      </FormSection>
    </>
  );
};

export default SC_018_InformationProtectionField;
