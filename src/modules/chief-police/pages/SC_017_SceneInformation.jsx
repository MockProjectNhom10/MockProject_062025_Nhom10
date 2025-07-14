import React from "react";
import FormCard from "@chief-police/components/sections/FormCard";
import FormSection from "@chief-police/components/sections/FormSection";
import Button from "@chief-police/components/common/button/Button";
import { PlusCircle } from "lucide-react";
import GenericTable from "@chief-police/components/table/GenericTable";
import {
  initialStatementsColumns,
  initialStatementsData,
  mediaColumns,
  mediaData,
  evidenceColumns,
  evidenceData,
} from "@chief-police/constants/tableStyles";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useToast } from "@core/hooks/useToast";

function SceneInformation() {
  const navigate = useNavigate();
  const { setActiveSection } = useOutletContext();
  const { showSuccess, showLoading } = useToast();

  const onClickNext = () => {
    setActiveSection(2);
    navigate("/chief-police/initial-investigation-report");
  };

  const onClickBack = () => {
    setActiveSection(0);
    navigate("/chief-police/initial-response");
  };

  const onClickSave = () => {
    showLoading("Saving information...");
    setTimeout(() => {
      showSuccess("Information saved successfully!");
      setActiveSection(2);
      navigate("/chief-police/initial-investigation-report");
    }, 1000);
  };

  return (
    <FormSection
      title="SCENE INFORMATION"
      footerCancel
      footerSave
      footerNext
      onClickCancel={onClickBack}
      onClickNext={onClickNext}
      onClickSave={onClickSave}
    >
      <FormCard
        title="INITIAL STATEMENTS"
        button={
          <Button onClick={() => navigate("view-initial-statement")}>
            View Details
          </Button>
        }
      >
        <GenericTable
          columns={initialStatementsColumns}
          data={initialStatementsData}
        />
      </FormCard>

      <FormCard
        title="IMAGES AND VIDEO"
        button={
          <Button
            onClick={() => navigate("images-and-videos")}
            classNameChildren="flex gap-2"
          >
            <PlusCircle size={16} /> ADD
          </Button>
        }
      >
        <GenericTable columns={mediaColumns} data={mediaData} />
      </FormCard>

      <FormCard
        title="PRELIMINARY PHYSICAL EVIDENCE INFORMATION"
        button={
          <Button
            onClick={() => navigate("preliminary-evidence")}
            classNameChildren="flex gap-2"
          >
            <PlusCircle size={16} /> ADD
          </Button>
        }
      >
        <GenericTable columns={evidenceColumns} data={evidenceData} />
      </FormCard>
    </FormSection>
  );
}

export default SceneInformation;
