import React from "react"
import FormSection from "@chief-police/components/sections/FormSection"
import FormCard from "@chief-police/components/sections/FormCard"
import ActionButtons from "@chief-police/components/common/button/ActionButtons"

const SC_023 = () => {
  // xử lý nút Cancel
  const handleCancel = () => {
    console.log("Cancel API called")
  }

  // xử lý nút Edit
  const handleEdit = () => {
    console.log("Edit API called")
  }

  // xử lý nút Delete
  const handleDelete = () => {
    console.log("Delete API called")
  }

  return (
    <FormSection title="PRELIMINARY PHYSICAL EVIDENCE INFORMATION PE-01">
      {/* tổng quan */}
      <FormCard title="OVERVIEW" className="mb-4">
        <div className="rounded-md border border-gray-400 px-4 py-3 text-sm text-gray-800">
          <p><strong>Temporary Identification Code</strong> PE-01</p>
          <p><strong>Collector</strong> Lieutenant James Potter – Forensic Technician</p>
          <p><strong>Time of Collection</strong> 14:35 PM, June 25, 2025</p>
          <p><strong>Location of Collection at the Scene</strong> On the kitchen floor near the victim's right hand (Position A1 in the crime scene sketch)</p>
        </div>
      </FormCard>

      {/* mô tả chi tiết */}
      <FormCard title="DETAILED DESCRIPTION" className="mb-4">
        <div className="rounded-md border border-gray-400 px-4 py-3 text-sm text-gray-800">
          A stainless steel kitchen knife, approximately 25 cm long, with visible reddish-brown stains (suspected blood) on the blade.
        </div>
      </FormCard>

      {/* tình trạng ban đầu */}
      <FormCard title="INITIAL CONDITION" className="mb-4">
        <div className="rounded-md border border-gray-400 px-4 py-3 text-sm text-gray-800">
          The knife was lying on its side, blade facing inward, with no apparent signs of disturbance or tampering.
        </div>
      </FormCard>

      {/* biện pháp bảo quản ban đầu */}
      <FormCard title="INITIAL PRESERVATION MEASURES" className="mb-6">
        <div className="rounded-md border border-gray-400 px-4 py-3 text-sm text-gray-800">
          The knife was collected using sterile gloves, placed in a transparent plastic evidence bag with a tamper-proof seal labeled “PE-01”, and stored in a dry, padded evidence box for transport to the forensic lab.
        </div>
      </FormCard>

      {/* nút thao tác nằm cuối, bên phải */}
      <div className="mt-6 flex justify-end">
        <ActionButtons
          actions={[
            { label: "Cancel", onClick: handleCancel, color: "gray" },
            { label: "Edit", onClick: handleEdit, color: "teal" },
            { label: "Delete", onClick: handleDelete, color: "red" },
          ]}
        />
      </div>
    </FormSection>
  )
}

export default SC_023
