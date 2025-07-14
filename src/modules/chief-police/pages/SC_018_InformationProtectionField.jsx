import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircle } from "lucide-react";

import CustomDatePicker from "@chief-police/components/common/date-time/DatePicker";
import TimePicker from "@chief-police/components/common/date-time/TimePicker";
import FormCard from "@chief-police/components/sections/FormCard";
import FormSection from "@chief-police/components/sections/FormSection";
import Button from "@chief-police/components/common/button/Button";
import TextArea from "@chief-police/components/common/input/TextArea";
import ActionButtons from "@chief-police/components/common/button/ActionButtons";
import FormInput from "@chief-police/components/common/input/FormInput";
import DragAndDropUpload from "@chief-police/components/common/upload/DragAndDropUpload";
import { useToast } from "@core/hooks/useToast";

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

const SC_018_InformationProtectionField = () => {
  const navigate = useNavigate();
  const { showSuccess, showLoading } = useToast();

  const [responsibleOfficer, setResponsibleOfficer] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [preservationDescription, setPreservationDescription] = useState("");
  const [areaCovered, setAreaCovered] = useState("");
  const [notes, setNotes] = useState([]);

  const handleClickCancel = () => {
    navigate("/chief-police/initial-response");
  };

  const handleClickSave = () => {
    showLoading("Saving information...");

    const newPreservationMeasure = {
      id: Date.now(),
      responsibleOfficer,
      startTime,
      endTime,
      preservationMeasures: preservationDescription,
      areaCovered,
      notes,
    };

    const stored = localStorage.getItem("scenePreservationMeasures");
    const parsed = stored ? JSON.parse(stored) : [];

    localStorage.setItem(
      "scenePreservationMeasures",
      JSON.stringify([...parsed, newPreservationMeasure])
    );

    setTimeout(() => {
      showSuccess("Information saved successfully!");
      navigate("/chief-police/initial-response");
    }, 1000);
  };

  return (
    <FormSection
      title="INFORMATION PROTECTION FIELD"
      footerCancel
      footerSave
      onClickCancel={handleClickCancel}
      onClickSave={handleClickSave}
    >
      {/* Responsible Officer */}
      <FormCard title="RESPONSIBLE UNIT/OFFICER" classNameHeader="mb-4">
        <FormInput
          value={responsibleOfficer}
          onChange={(e) => setResponsibleOfficer(e.target.value)}
        />
      </FormCard>

      {/* Time Range */}
      <FormCard title="TIME OF ARRIVAL AT THE SCENE" classNameHeader="mb-4">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm font-medium">Start time</span>
          <TimePicker onChange={(val) => setStartTime(val)} />
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm font-medium">End time</span>
          <TimePicker onChange={(val) => setEndTime(val)} />
        </div>
      </FormCard>

      {/* Scene Protection Methods */}
      <FormCard
        title="DESCRIPTION OF SCENE PROTECTION METHODS"
        classNameHeader="mb-4"
      >
        <TextArea
          value={preservationDescription}
          onChange={(e) => setPreservationDescription(e.target.value)}
          rows={4}
        />
      </FormCard>

      {/* Area Covered */}
      <FormCard title="AREA COVERED / PERIMETER" classNameHeader="mb-4">
        <FormInput
          value={areaCovered}
          onChange={(e) => setAreaCovered(e.target.value)}
        />
      </FormCard>

      {/* Notes */}
      <FormCard title="NOTES / SPECIAL INSTRUCTIONS" classNameHeader="mb-4">
        <TextArea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
        />
      </FormCard>

      {/* Attachment Upload */}
      <FormCard title="ATTACHMENT" classNameHeader="mb-4">
        <DragAndDropUpload
          acceptedTypes={allowedTypes}
          maxFileSizeByMB={20}
          maxFiles={5}
          browseText="Browse"
          showFileSize={true}
        />
      </FormCard>
    </FormSection>
  );
};

export default SC_018_InformationProtectionField;
