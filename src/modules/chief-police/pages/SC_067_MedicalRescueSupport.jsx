import FormCard from "@chief-police/components/sections/FormCard";
import FormSection from "@chief-police/components/sections/FormSection";
import TextArea from "@chief-police/components/common/input/TextArea";
import DragAndDropUpload from "@chief-police/components/common/upload/DragAndDropUpload";

import React from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@core/hooks/useToast";
import TimePicker from "@chief-police/components/common/date-time/TimePicker";

const SC_067_MedicalRescueSupport = () => {
  const navigate = useNavigate();
  const { showSuccess, showLoading } = useToast();
  const formData = [
    { title: "MEDICAL/RESCUE UNIT ID", value: "" },
    { title: "TYPE OF SUPPORT PROVIDED", value: "" },
    { title: "PERSONNEL ASSIGNED", value: "" },
    { title: "LOCATION ASSIGNED", value: "" },
    { title: "REMARKS/NOTES", value: "" },
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
    <FormSection
      title="MEDICAL/RESCUE SUPPORT"
      footerCancel
      footerSave
      onClickCancel={handleClickCancel}
      onClickSave={handleClickSave}
    >
      <FormCard title="TIME OF ARRIVAL" button={<TimePicker />}></FormCard>
      {formData.map(({ title }, index) => (
        <FormCard key={index} title={title}>
          <TextArea
            name={title.toLowerCase().replace(/\s+/g, "_")}
            value=""
            onChange={() => {}}
            placeholder={`Enter ${title}`}
            rows={3}
          />
        </FormCard>
      ))}

      <FormCard title="SCENE SKETCH">
        <DragAndDropUpload />
      </FormCard>
    </FormSection>
  );
};

export default SC_067_MedicalRescueSupport;
