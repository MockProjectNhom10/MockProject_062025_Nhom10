import CustomDatePicker from "@chief-police/components/common/date-time/DatePicker";
import TextArea from "@chief-police/components/common/input/TextArea";
import DragAndDropUpload from "@chief-police/components/common/upload/DragAndDropUpload";
import FormCard from "@chief-police/components/sections/FormCard";
import FormSection from "@chief-police/components/sections/FormSection";
import { UploadIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SC_069_ImagesAndVideos() {
  const navigate = useNavigate();
  const location = useLocation();
  const editingItem = location.state;

  const [dateTaken, setDateTaken] = useState(null);
  const [description, setDescription] = useState("");
  const [capturedBy, setCapturedBy] = useState("");
  const [previewNote, setPreviewNote] = useState("");
  const [mediaType, setMediaType] = useState("Image");

  useEffect(() => {
    if (editingItem) {
      setDateTaken(editingItem.date || null);
      setDescription(editingItem.description || "");
      setCapturedBy(editingItem.capturedBy || "");
      setPreviewNote(editingItem.previewNote || "");
      setMediaType(editingItem.mediaType || "Image");
    }
  }, [editingItem]);

  const handleSave = () => {
    const mediaList = JSON.parse(localStorage.getItem("mediaList")) || [];

    const mediaItem = {
      id: editingItem?.id || Date.now(),
      date: dateTaken,
      description,
      capturedBy,
      previewNote,
      mediaType,
    };

    let updatedList;
    if (editingItem?.id) {
      updatedList = mediaList.map((item) => (item.id === editingItem.id ? mediaItem : item));
    } else {
      updatedList = [...mediaList, mediaItem];
    }

    localStorage.setItem("mediaList", JSON.stringify(updatedList));
    navigate("/chief-police/scene-information");
  };

  const handleCancel = () => {
    navigate("/chief-police/scene-information");
  };

  return (
    <FormSection
      title="IMAGES AND VIDEOS"
      footerSave
      footerCancel
      onClickSave={handleSave}
      onClickCancel={handleCancel}
    >
      <FormCard title="DATE TAKEN" button={<CustomDatePicker value={dateTaken} onChange={setDateTaken} />} />

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

        <TextArea label="DESCRIPTION" value={description} onChange={(e) => setDescription(e.target.value)} rows={4} />
      </div>

      <FormCard title="CAPTURED BY">
        <TextArea value={capturedBy} onChange={(e) => setCapturedBy(e.target.value)} rows={4} />
      </FormCard>

      <FormCard title="PREVIEW MODAL">
        <TextArea value={previewNote} onChange={(e) => setPreviewNote(e.target.value)} rows={4} />
      </FormCard>
    </FormSection>
  );
}

export default SC_069_ImagesAndVideos;
