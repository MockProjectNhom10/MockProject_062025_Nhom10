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

const SC_018_InformationProtectionField = () => {
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
  return (
    <>
      <FormSection title="INFORMATION PROTECTION FIELD">
        <FormCard title="RESPONSIBLE UNIT/OFFICER" classNameHeader="mb-4">
          <FormInput />
        </FormCard>
        <FormCard title="TIME OF ARRIVAL AT THE SCENE" classNameHeader="mb-4">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs">Start time </span>
            <TimePicker />
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs">End time </span>
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
        <FormCard
          title="ATTACHMENT"
          button={
            <Button classNameChildren="flex flex-nowrap gap-2">
              Upload {<PlusCircle className="h-4 w-4" />}
            </Button>
          }
          classNameHeader="mb-4"
        >
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
