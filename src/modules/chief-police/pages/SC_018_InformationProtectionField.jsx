import CustomDatePicker from "@chief-police/components/common/date-time/DatePicker";
import TimePicker from "@chief-police/components/common/date-time/TimePicker";
import FormCard from "@chief-police/components/sections/FormCard";
import FormSection from "@chief-police/components/sections/FormSection";
import GenericTable from "@chief-police/components/table/GenericTable";
import Button from "@chief-police/components/common/button/Button";
import React from "react";
import { PlusCircle } from "lucide-react";
import TextArea from "@chief-police/components/common/input/TextArea";
import ActionButtons from "@chief-police/components/common/button/ActionButtons";
import FormInput from "@chief-police/components/common/input/FormInput";
import DragAndDropUpload from "@chief-police/components/common/upload/DragAndDropUpload";
import { useNavigate } from "react-router-dom";
import { useToast } from "@core/hooks/useToast";

const SC_018_InformationProtectionField = () => {
  const navigate = useNavigate();
  const { showSuccess, showLoading } = useToast();
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "video/mp4",
    "application/pdf",
    "image/vnd.adobe.photoshop",
    "application/postscript",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ];

  const handleClickCancel = () => {
    navigate("/chief-police/initial-response");
  };

  const handleClickSave = () => {
    showLoading("Saving information...");
    setTimeout(() => {
      showSuccess("Information saved successfully!");
      navigate("/chief-police/initial-response");
    }, 1000);
  };
  return (
    <>
      <FormSection
        title="INFORMATION PROTECTION FIELD"
        footerCancel
        footerSave
        onClickCancel={handleClickCancel}
        onClickSave={handleClickSave}
      >
        <FormCard title="RESPONSIBLE UNIT/OFFICER" classNameHeader="mb-4">
          <FormInput />
        </FormCard>
        <FormCard title="TIME OF ARRIVAL AT THE SCENE" classNameHeader="mb-4">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm">Start time </span>
            <TimePicker />
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm">End time </span>
            <TimePicker />
          </div>
        </FormCard>
        <FormCard
          title="DESCRIPTION OF SCENE PROTECTION METHODS"
          classNameHeader="mb-4"
        >
          <FormInput />
        </FormCard>
        <FormCard title="AREA COVERED / PERIMETER" classNameHeader="mb-4">
          <FormInput />
        </FormCard>
        <FormCard title="NOTES / SPECIAL INSTRUCTIONS" classNameHeader="mb-4">
          <FormInput />
        </FormCard>
        <FormCard title="ATTACHMENT" classNameHeader="mb-4">
          <DragAndDropUpload
            acceptedTypes={allowedTypes}
            maxFileSizeByMB={20} // MB
            maxFiles={5}
            browseText="Browse"
            showFileSize={true}
          />
        </FormCard>
      </FormSection>
    </>
  );
};

export default SC_018_InformationProtectionField;
