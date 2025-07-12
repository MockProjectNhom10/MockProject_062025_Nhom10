import React from "react";
import FormCard from "@chief-police/components/sections/FormCard";
import FormSection from "@chief-police/components/sections/FormSection";
import Button from "@chief-police/components/common/button/Button";
import {
  PlusCircle,
  CircleChevronRight,
  Edit,
  Trash2,
  MonitorUp,
} from "lucide-react";
import GenericTable from "@chief-police/components/table/GenericTable";

import {
  initialStatementsColumns,
  initialStatementsData,
  sceneDescriptionColumns,
  sceneDescriptionData,
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
        button={<Button>View Details</Button>}
      >
        <GenericTable
          columns={initialStatementsColumns}
          data={initialStatementsData}
        />
      </FormCard>

      <FormCard
        title="SCENE DESCRIPTION"
        button={
          <Button classNameChildren="flex gap-2">
            <PlusCircle size={16} /> ADD
          </Button>
        }
      >
        <GenericTable
          columns={sceneDescriptionColumns}
          data={sceneDescriptionData}
        />
      </FormCard>

      <FormCard
        title="IMAGES AND VIDEO"
        button={
          <Button classNameChildren="flex gap-2">
            <PlusCircle size={16} /> ADD
          </Button>
        }
      >
        <GenericTable columns={mediaColumns} data={mediaData} />
      </FormCard>

      <FormCard
        title="PRELIMINARY PHYSICAL EVIDENCE INFORMATION"
        button={
          <Button classNameChildren="flex gap-2">
            <PlusCircle size={16} /> ADD
          </Button>
        }
      >
        <GenericTable columns={evidenceColumns} data={evidenceData} />
      </FormCard>

      <FormCard
        title="SCENE SKETCH"
        button={
          <div className="flex items-center justify-between space-x-2">
            <Trash2 className="h-4 w-4 text-red-500" />
            <Edit className="h-4 w-4 text-blue-500" />
            <CircleChevronRight className="h-4 w-4 text-gray-600" />
            <Button classNameChildren="flex gap-2">
              <MonitorUp size={16} /> UP LOAD
            </Button>
          </div>
        }
      ></FormCard>
    </FormSection>
  );
}

export default SceneInformation;
