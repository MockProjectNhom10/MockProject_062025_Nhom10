import React from "react";
import FormSection from "@chief-police/components/sections/FormSection";
import FormCard from "@chief-police/components/sections/FormCard";
import ActionButtons from "@chief-police/components/common/button/ActionButtons";
import { useNavigate } from "react-router-dom";

const SC_023_PreliminaryEvidence = ({ isBlank = false }) => {
  const navigate = useNavigate();
  // xử lý nút Cancel
  const handleCancel = () => {
    navigate("/chief-police/scene-information");
  };
  const handleSave = () => {
    navigate("/chief-police/scene-information");
  };
  return (
    <FormSection
      title="PRELIMINARY PHYSICAL EVIDENCE INFORMATION PE-01"
      footerCancel
      footerSave
      onClickCancel={handleCancel}
      onClickSave={handleSave}
    >
      {/* tổng quan */}
      <FormCard title="OVERVIEW" className="mb-4">
        <div className="rounded-md border border-gray-400 px-4 py-3 text-sm text-gray-800">
          <p>
            {!isBlank && (
              <span>
                <strong>Temporary Identification Code</strong> PE-01
              </span>
            )}
          </p>
          <p>
            {!isBlank && (
              <span>
                <strong>Collector</strong> Lieutenant James Potter – Forensic
                Technician
              </span>
            )}
          </p>
          <p>
            {!isBlank && (
              <span>
                <strong>Time of Collection</strong> 14:35 PM, June 25, 2025
              </span>
            )}
          </p>
          <p>
            {!isBlank && (
              <span>
                <strong>Location of Collection at the Scene</strong> On the
                kitchen floor near the victim's right hand (Position A1 in the
                crime scene sketch)
              </span>
            )}
          </p>
        </div>
      </FormCard>

      {/* mô tả chi tiết */}
      <FormCard title="DETAILED DESCRIPTION" className="mb-4">
        <div className="rounded-md border border-gray-400 px-4 py-3 text-sm text-gray-800">
          {!isBlank && (
            <span>
              A stainless steel kitchen knife, approximately 25 cm long, with
              visible reddish-brown stains (suspected blood) on the blade.
            </span>
          )}
        </div>
      </FormCard>

      {/* tình trạng ban đầu */}
      <FormCard title="INITIAL CONDITION" className="mb-4">
        <div className="rounded-md border border-gray-400 px-4 py-3 text-sm text-gray-800">
          {!isBlank && (
            <span>
              The knife was lying on its side, blade facing inward, with no
              apparent signs of disturbance or tampering.
            </span>
          )}
        </div>
      </FormCard>

      {/* biện pháp bảo quản ban đầu */}
      <FormCard title="INITIAL PRESERVATION MEASURES" className="mb-6">
        <div className="rounded-md border border-gray-400 px-4 py-3 text-sm text-gray-800">
          {!isBlank && (
            <span>
              The knife was collected using sterile gloves, placed in a
              transparent plastic evidence bag with a tamper-proof seal labeled
              "PE-01", and stored in a dry, padded evidence box for transport to
              the forensic lab.
            </span>
          )}
        </div>
      </FormCard>
    </FormSection>
  );
};

export default SC_023_PreliminaryEvidence;
