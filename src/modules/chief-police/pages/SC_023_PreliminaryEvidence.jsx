import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormSection from "@chief-police/components/sections/FormSection";
import FormCard from "@chief-police/components/sections/FormCard";
import ActionButtons from "@chief-police/components/common/button/ActionButtons";
import TextArea from "@chief-police/components/common/input/TextArea";
import FormInput from "@chief-police/components/common/input/FormInput";
import { useToast } from "@core/hooks/useToast";

const SC_023_PreliminaryEvidence = ({ isBlank = false }) => {
  const navigate = useNavigate();
  const { showSuccess, showLoading } = useToast();
  const [formData, setFormData] = useState({
    overview: "",
    detailedDescription: "",
    initialCondition: "",
    initialPreservationMeasures: ""
  });

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCancel = () => {
    navigate("/chief-police/scene-information");
  };

  const handleSave = () => {
     showLoading("Saving information...");
    setTimeout(() => {
      showSuccess("Information saved successfully!");
       navigate("/chief-police/scene-information", { state: formData });
    }, 1000);
  };

  return (
    <FormSection
      title="PRELIMINARY PHYSICAL EVIDENCE INFORMATION PE-01"
      footerCancel
      footerSave
      onClickCancel={handleCancel}
      onClickSave={handleSave}
    >
      <FormCard title="OVERVIEW">
        <TextArea
          name="overview"
          value={formData.overview}
          onChange={(e) => handleChange("overview", e.target.value)}
        />
      </FormCard>

      <FormCard title="DETAILED DESCRIPTION">
        <FormInput
          name="detailed-description"
          value={formData.detailedDescription}
          onChange={(e) => handleChange("detailedDescription", e.target.value)}
        />
      </FormCard>

      <FormCard title="INITIAL CONDITION">
        <FormInput
          name="initial-condition"
          value={formData.initialCondition}
          onChange={(e) => handleChange("initialCondition", e.target.value)}
        />
      </FormCard>

      <FormCard title="INITIAL PRESERVATION MEASURES">
        <FormInput
          name="initial-preservation-measures"
          value={formData.initialPreservationMeasures}
          onChange={(e) =>
            handleChange("initialPreservationMeasures", e.target.value)
          }
        />
      </FormCard>
    </FormSection>
  );
};

export default SC_023_PreliminaryEvidence;
