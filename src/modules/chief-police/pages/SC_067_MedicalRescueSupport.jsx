import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormCard from "@chief-police/components/sections/FormCard";
import FormSection from "@chief-police/components/sections/FormSection";
import TextArea from "@chief-police/components/common/input/TextArea";
import DragAndDropUpload from "@chief-police/components/common/upload/DragAndDropUpload";
import TimePicker from "@chief-police/components/common/date-time/TimePicker";
import { useToast } from "@core/hooks/useToast";

const SC_067_MedicalRescueSupport = () => {
  const navigate = useNavigate();
  const { showSuccess, showLoading } = useToast();

  const [form, setForm] = useState({
    unitID: "",
    supportType: "",
    personnel: "",
    location: "",
    remarks: "",
  });

  const [arrivalTime, setArrivalTime] = useState("");

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleClickCancel = () => {
    navigate("/chief-police/initial-response");
  };

  const handleClickSave = () => {
    showLoading("Saving information...");

    const newSupportData = {
      id: Date.now(),
      ...form,
      arrivalTime,
    };

    const stored = localStorage.getItem("medicalRescueSupport");
    const parsed = stored ? JSON.parse(stored) : [];

    localStorage.setItem(
      "medicalRescueSupport",
      JSON.stringify([...parsed, newSupportData])
    );

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
      <FormCard title="TIME OF ARRIVAL">
        <TimePicker value={arrivalTime} onChange={(e) => setArrivalTime(e.target.value)} />
      </FormCard>

      <FormCard title="MEDICAL/RESCUE UNIT ID">
        <TextArea
          value={form.unitID}
          onChange={(e) => handleChange("unitID", e.target.value)}
          placeholder="Enter Medical/Rescue Unit ID"
        />
      </FormCard>

      <FormCard title="TYPE OF SUPPORT PROVIDED">
        <TextArea
          value={form.supportType}
          onChange={(e) => handleChange("supportType", e.target.value)}
          placeholder="Enter Type of Support Provided"
        />
      </FormCard>

      <FormCard title="PERSONNEL ASSIGNED">
        <TextArea
          value={form.personnel}
          onChange={(e) => handleChange("personnel", e.target.value)}
          placeholder="Enter Personnel Assigned"
        />
      </FormCard>

      <FormCard title="LOCATION ASSIGNED">
        <TextArea
          value={form.location}
          onChange={(e) => handleChange("location", e.target.value)}
          placeholder="Enter Location Assigned"
        />
      </FormCard>

      <FormCard title="REMARKS/NOTES">
        <TextArea
          value={form.remarks}
          onChange={(e) => handleChange("remarks", e.target.value)}
          placeholder="Enter Remarks/Notes"
        />
      </FormCard>

      <FormCard title="SCENE SKETCH">
        <DragAndDropUpload />
      </FormCard>
    </FormSection>
  );
};

export default SC_067_MedicalRescueSupport;
