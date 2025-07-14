import React, { useEffect, useState } from "react";
import FormCard from "@chief-police/components/sections/FormCard";
import FormSection from "@chief-police/components/sections/FormSection";
import Button from "@chief-police/components/common/button/Button";
import { PlusCircle } from "lucide-react";
import GenericTable from "@chief-police/components/table/GenericTable";

import {
  getInitialStatementsColumns,
  initialStatementsData,
  mediaColumns,
  mediaData,
  evidenceColumns,
  evidenceData,
} from "@chief-police/constants/tableStyles";
import { useNavigate } from "react-router-dom";
import { useToast } from "@core/hooks/useToast";

function SceneInformation() {
  const navigate = useNavigate();
  const { showSuccess, showLoading } = useToast();
  const onClickNext = () => {
    navigate("/chief-police/initial-investigation-report");
  };
  const onClickBack = () => {
    navigate("/chief-police/initial-response");
  };
  const onClickSave = () => {
    showLoading("Saving information...");
    setTimeout(() => {
      showSuccess("Information saved successfully!");
      navigate("/chief-police/initial-investigation-report");
    }, 1000);
  };

  const [statementData, setStatementData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("initialStatements")) || [];
    setStatementData(stored);
  }, []);

  const handleViewDetail = (item) => {
    navigate("view-initial-statement", { state: item });
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
          <Button
            onClick={() => navigate("add-initial-statement")}
            classNameChildren="flex gap-2"
          >
            <PlusCircle size={16} /> ADD
          </Button>
        }
      >
        <GenericTable
          columns={getInitialStatementsColumns(handleViewDetail)}
          data={statementData}
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
