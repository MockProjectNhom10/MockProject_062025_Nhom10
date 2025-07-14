import CustomDatePicker from "@chief-police/components/common/date-time/DatePicker";
import TextArea from "@chief-police/components/common/input/TextArea";
import DragAndDropUpload from "@chief-police/components/common/upload/DragAndDropUpload";
import FormCard from "@chief-police/components/sections/FormCard";
import FormSection from "@chief-police/components/sections/FormSection";
import { UploadIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SC_069_ImagesAndVideos() {
  const [time, setTime] = useState(null);
  const navigate = useNavigate();

  const handleSave = () => navigate("/chief-police/scene-information");

  const handleCancel = () => navigate("/chief-police/scene-information");

  return (
    <FormSection
      title="IMAGES AND VIDEOS"
      footerSave
      footerCancel
      onClickSave={handleSave}
      onClickCancel={handleCancel}
    >
      <FormCard
        title="DATE TAKEN"
        button={<CustomDatePicker onChange={setTime} />}
      />
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-8">
        <div className="mb-6">
          <div className="desktop:flex-row desktop:justify-between flex flex-col items-start gap-4">
            <h2 className="text-lg font-semibold">SCENE SKETCH</h2>
            <button className="flex items-center gap-2 rounded bg-gray-200 px-4 py-2 text-sm shadow-sm hover:bg-gray-300">
              UPLOAD
              <UploadIcon className="h-4 w-4" />
            </button>
          </div>
          <div className="desktop:flex-row desktop:justify-between flex flex-col gap-4">
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

export default SC_069_ImagesAndVideos;
