import React from "react";
import FormCard from "@chief-police/components/sections/FormCard";
import FormSection from "@chief-police/components/sections/FormSection";
import Button from "@chief-police/components/common/button/Button";
import { PlusCircle, CircleChevronRight, Edit, Trash2, MonitorUp } from "lucide-react";
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

function SceneInformation() {
  return (
    <FormSection title="SCENE INFORMATION">
      <FormCard title="INITIAL STATEMENTS" button={<Button>View Details</Button>}>
        <GenericTable columns={initialStatementsColumns} data={initialStatementsData} variant="status" />
      </FormCard>

      <FormCard title="SCENE DESCRIPTION" button={
        <Button classNameChildren="flex gap-2">
          <PlusCircle size={16} /> ADD
        </Button>
      }>
        <GenericTable columns={sceneDescriptionColumns} data={sceneDescriptionData} variant="status" />
      </FormCard>

      <FormCard title="IMAGES AND VIDEO" button={
        <Button classNameChildren="flex gap-2">
          <PlusCircle size={16} /> ADD
        </Button>
      }>
        <GenericTable columns={mediaColumns} data={mediaData} variant="status" />
      </FormCard>

      <FormCard title="PRELIMINARY PHYSICAL EVIDENCE INFORMATION" button={
        <Button classNameChildren="flex gap-2">
          <PlusCircle size={16} /> ADD
        </Button>
      }>
        <GenericTable columns={evidenceColumns} data={evidenceData} variant="status" />
      </FormCard>
      
      <FormCard title="SCENE SKETCH" button={
        <div className="flex items-center justify-between space-x-2">
        <Trash2 className="w-4 h-4 text-red-500" />
        <Edit className="w-4 h-4 text-blue-500" />
        <CircleChevronRight className="w-4 h-4 text-gray-600" />
        <Button classNameChildren="flex gap-2">
          <MonitorUp size={16} /> UP LOAD
        </Button>      
      </div>
      
     }>

      </FormCard>
    </FormSection>
  );
}

export default SceneInformation;
