import CustomDatePicker from "@chief-police/components/common/date-time/DatePicker";
import TextArea from "@chief-police/components/common/input/TextArea";
import DragAndDropUpload from "@chief-police/components/common/upload/DragAndDropUpload";
import FormCard from "@chief-police/components/sections/FormCard";
import FormSection from "@chief-police/components/sections/FormSection";
import { DraftingCompassIcon, UploadIcon } from "lucide-react";
import React, { useState } from "react";

function SC_069_Upload() {
  const [time, setTime] = useState(null);

  return (
    <FormSection title="IMAGES AND VIDEOS">
      <FormCard
        title="DATE TAKEN"
        button={<CustomDatePicker onChange={setTime} />}
      />
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-8">
        <div className="mb-6">
          <div className="flex flex-col desktop:flex-row desktop:justify-between gap-4 items-start">
            <h2 className="text-lg font-semibold">SCENE SKETCH</h2>
            <button className="flex items-center gap-2 rounded bg-gray-200 px-4 py-2 text-sm shadow-sm hover:bg-gray-300">
              UPLOAD
               <UploadIcon className="h-4 w-4" />
            </button>
          </div>
          <div className="flex gap-4 flex-col desktop:flex-row desktop:justify-between">
            <DragAndDropUpload />
            <DragAndDropUpload />
            <DragAndDropUpload />
            <DragAndDropUpload />
          </div>
        </div>

        <TextArea label="DESCRIPTION" placeholder="" rows={4} />
      </div>

      <FormCard title="CAPTURED BY">
        <TextArea placeholder="" rows={4} />
      </FormCard>
      <FormCard title="PREVIEW MODAL">
        <TextArea placeholder="" rows={4} />
      </FormCard>
    </FormSection>
  );
}

export default SC_069_Upload;
