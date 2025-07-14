import React, { useState } from "react";
import FormInput from "../components/common/input/FormInput";
import Dropdown from "../components/common/dropdown/DropDown";
import TextArea from "../components/common/input/TextArea";
import Button from "../components/common/button/Button";
import FormSection from "@chief-police/components/sections/FormSection";
import FormCard from "@chief-police/components/sections/FormCard";
import DragAndDropUpload from "@chief-police/components/common/upload/DragAndDropUpload";
import { useLocation, useNavigate } from "react-router-dom";

const roleOptions = [
  { label: "Witness", value: "witness" },
  { label: "Suspect", value: "suspect" },
];

const SC_022_ViewIntinalStatement = () => {
  const location = useLocation();
  const data = location.state;

  const [witnessName, setWitnessName] = useState(data?.initialName || "");
  const [date, setDate] = useState(data?.date || "");
  const [contact, setContact] = useState(data?.contactInformation || "");
  const [role, setRole] = useState(data?.role || "");
  const [statement, setStatement] = useState(data?.statementContent || "");

  const navigate = useNavigate();

  const handleSave = () => navigate("/chief-police/scene-information");

  const handleCancel = () => navigate("/chief-police/scene-information");

  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "video/mp4",
    "application/pdf",
    "image/vnd.adobe.photoshop",
    "application/postscript",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ];

  return (
    <FormSection
      title="WITNESS STATEMENT DETAILS"
      footerCancel
      footerSave
      onClickCancel={handleCancel}
      onClickSave={handleSave}
    >
      {/* Witness Information Card */}
      <FormCard title="WITNESS INFORMATION" classNameHeader="mb-4">
        <div className="ssm:grid-cols-1 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-2">
          <FormInput
            label="Witness name"
            name="witnessName"
            value={witnessName}
            onChange={(e) => setWitnessName(e.target.value)}
          />
          <div>
            <label className="mb-1 block text-[#141522]">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-[#eee] p-2"
            />
          </div>
          <FormInput
            label="Contact information"
            name="contactInfo"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <Dropdown
            label="Role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            options={roleOptions}
          />
        </div>
      </FormCard>

      {/* Detailed Statement Card */}
      <FormCard title="DETAILED STATEMENT" classNameHeader="mb-4">
        <div className="mb-3">
          <label className="text-gray-700">
            <p className="text-sm">Content of the statement</p>
          </label>
        </div>
        <TextArea
          name="statementContent"
          value={statement}
          onChange={(e) => setStatement(e.target.value)}
          rows={6}
          className="w-full"
        />
      </FormCard>

      {/* Evidence Link Card */}
      <FormCard title="ATTACHMENT" classNameHeader="mb-4">
        <DragAndDropUpload
          acceptedTypes={allowedTypes}
          maxFileSizeByMB={20} // MB
          maxFiles={5}
          browseText="Browse"
          showFileSize={true}
        />
      </FormCard>
    </FormSection>
  );
};

export default SC_022_ViewIntinalStatement;
