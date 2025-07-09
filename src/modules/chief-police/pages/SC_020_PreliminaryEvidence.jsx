import FormInput from "@chief-police/components/common/input/FormInput";
import TextArea from "@chief-police/components/common/input/TextArea";
import FormCard from "@chief-police/components/sections/FormCard";
import FormSection from "@chief-police/components/sections/FormSection";
import React from "react";

const SC_020_PreliminaryEvidence = () => {
  // example id
  let peId = "PE-03";

  return (
    <div>
      <FormSection title={`Preliminary Physical Evidence: ` + peId}>
        {/* Overview */}
        <FormCard title="OVERVIEW">
          <TextArea
            name="overview"
            disabled
            value="Temporary Identification Code: PE-03
Collector: ___
Time of Collection: ___
Location of Collection at the Scene: ___"
          />
        </FormCard>

        {/* Detailed desc */}
        <FormCard title="DETAILED DESCRIPTION">
          <FormInput name="detailed-description" disabled value="____" />
        </FormCard>

        {/* Initial condition */}
        <FormCard title="INITIAL CONDITION">
          <FormInput name="initial-condition" disabled value="____" />
        </FormCard>

        {/* Initial condition */}
        <FormCard title="INITIAL PRESERVATION MEASURES">
          <FormInput
            name="initial-preservation-measures"
            disabled
            value="____"
          />
        </FormCard>
      </FormSection>
    </div>
  );
};

export default SC_020_PreliminaryEvidence;
