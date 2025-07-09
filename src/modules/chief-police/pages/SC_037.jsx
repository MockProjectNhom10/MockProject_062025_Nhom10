import React, { useState } from "react";
import FormSection from "../components/sections/FormSection";
import FormCard from "../components/sections/FormCard";
import ActionButtons from "../components/common/button/ActionButtons";
import GenericTable from "../components/table/GenericTable";
import Modal from "../components/common/modal/Modal"; // su dung Modal xac nhan xoa
import { Pencil, Trash2, Eye, ArrowRightCircle } from "lucide-react";

const SC_037 = () => {
  // ham xu ly nut Cancel
  const handleCancel = () => console.log("Cancel API called");

  // ham xu ly nut Save
  const handleSave = () => console.log("Save API called");

  // trang thai hien thi modal xac nhan xoa
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // ham mo modal
  const openDeleteModal = () => setIsDeleteModalOpen(true);

  // ham dong modal
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  return (
    <FormSection title="SCENE INFORMATION">
      {/* bang Initial Statements */}
      <FormCard>
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-sm font-bold text-gray-800">INITIAL STATEMENTS</h4>
          <button className="flex items-center gap-1 px-3 py-1.5 text-sm bg-[#E7EDF6] text-gray-700 rounded-md hover:bg-blue-100">
            ADD <span className="text-lg leading-none">＋</span>
          </button>
        </div>

        <GenericTable
          variant="default"
          columns={[
            { header: "#", accessor: "index" },
            { header: "Statement Type", accessor: "type" },
            { header: "Provider", accessor: "provider" },
            { header: "Date", accessor: "date" },
            {
              header: "",
              render: () => (
                <div className="flex justify-end gap-2 pr-2">
                  <button className="p-1 rounded-full hover:bg-gray-200">
                    <Pencil size={16} className="text-gray-600" />
                  </button>
                  <button className="p-1 rounded-full hover:bg-gray-200">
                    <ArrowRightCircle size={18} className="text-gray-600" />
                  </button>
                </div>
              ),
            },
          ]}
          data={[
            { index: 1, type: "Witness", provider: "Ms.A", date: "15/06/2025" },
            { index: 2, type: "Witness", provider: "Ms.B", date: "11/04/2025" },
            { index: 3, type: "Victim", provider: "Mr.C", date: "17/05/2025" },
            { index: 4, type: "Bro", provider: "Mr.C K", date: "17/05/2025" },
            { index: 5, type: "Lover", provider: "Mr.T L", date: "17/05/2025" },
            { index: 6, type: "Neighbor", provider: "Mr.D", date: "17/05/2025" },
            { index: 7, type: "Witness", provider: "Mr.Jond", date: "20/07/2025" },
          ]}
        />
      </FormCard>

      {/* bang Images and Video */}
      <FormCard>
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-sm font-bold text-gray-800">IMAGES AND VIDEO</h4>
          <button className="flex items-center gap-1 px-3 py-1.5 text-sm bg-[#E7EDF6] text-gray-700 rounded-md hover:bg-blue-100">
            ADD <span className="text-lg leading-none">＋</span>
          </button>
        </div>

        <GenericTable
          variant="default"
          columns={[
            { header: "#", accessor: "index" },
            { header: "Video or Image", accessor: "type" },
            { header: "Description", accessor: "description" },
            { header: "Date", accessor: "date" },
            {
              header: "",
              render: () => (
                <div className="flex justify-end gap-2 pr-2">
                  <button
                    onClick={openDeleteModal}
                    className="p-1 rounded-full hover:bg-gray-200"
                  >
                    <Trash2 size={16} className="text-gray-600" />
                  </button>
                  <button className="p-1 rounded-full hover:bg-gray-200">
                    <ArrowRightCircle size={18} className="text-gray-600" />
                  </button>
                </div>
              ),
            },
          ]}
          data={[
            { index: 1, type: "——", description: "——", date: "15/06/2025" },
            { index: 2, type: "——", description: "——", date: "11/04/2025" },
            { index: 3, type: "——", description: "——", date: "17/05/2025" },
            { index: 4, type: "——", description: "——", date: "17/05/2025" },
          ]}
        />
      </FormCard>

      {/* bang Preliminary Physical Evidence (giu nguyen) */}
      <FormCard>
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-sm font-bold text-gray-800">
            PRELIMINARY PHYSICAL EVIDENCE INFORMATION
          </h4>
          <button className="flex items-center gap-1 px-3 py-1.5 text-sm bg-[#E7EDF6] text-gray-700 rounded-md hover:bg-blue-100">
            ADD <span className="text-lg leading-none">＋</span>
          </button>
        </div>

        <GenericTable
          variant="default"
          columns={[
            { header: "ID", accessor: "id" },
            { header: "Location", accessor: "location" },
            { header: "Collector", accessor: "collector" },
            { header: "Time", accessor: "time" },
            {
              header: "",
              render: () => (
                <div className="flex justify-end pr-4">
                  <button className="px-3 py-1 text-sm text-teal-700 border border-teal-600 rounded-md hover:bg-teal-50">
                    View details
                  </button>
                </div>
              ),
            },
          ]}
          data={[
            {
              id: "PE-01",
              location: "A1 – Kitchen",
              collector: "Lt. James Potter",
              time: "14:35 – 25/06/25",
            },
            {
              id: "PE-02",
              location: "B2 – Living Room",
              collector: "Sgt. Ron Weasley",
              time: "14:42 – 25/06/25",
            },
            {
              id: "PE-03",
              location: "B2 – Living Room",
              collector: "Sgt. Ron Weasley",
              time: "14:42 – 25/06/25",
            },
            {
              id: "PE-04",
              location: "B2 – Living Room",
              collector: "Sgt. Ron Weasley",
              time: "14:42 – 25/06/25",
            },
          ]}
        />
      </FormCard>

      {/* nut thao tac cuoi */}
      <div className="mt-6 flex justify-end">
        <ActionButtons
          actions={[
            { label: "Cancel", onClick: handleCancel, color: "gray" },
            { label: "Save", onClick: handleSave, color: "teal" },
          ]}
        />
      </div>

      {/* Modal xac nhan xoa */}
      <Modal
  isOpen={isDeleteModalOpen}
  onClose={closeDeleteModal}
  title={null} // xoa title mac dinh
>
  <h2 className="text-xl font-semibold text-gray-800 mb-2">
    Are You Sure You Want to Permanently Delete This Media?
  </h2>

  <p className="text-sm text-gray-700 mb-6">
    <strong className="text-red-500">Warning:</strong> This action is irreversible. Deleting this piece of media will result in the permanent loss of all associated data, including its history, handling records, and any linked materials. Please proceed only if you are absolutely certain this evidence should be removed from the system.
  </p>

  <div className="flex justify-end gap-3">
    <button
      onClick={closeDeleteModal}
      className="px-4 py-2 text-sm rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800"
    >
      Cancel
    </button>
    <button
      onClick={() => {
        console.log("Delete confirmed");
        closeDeleteModal();
      }}
      className="px-4 py-2 text-sm rounded-md bg-red-600 hover:bg-red-700 text-white"
    >
      Yes, Delete Permanently
    </button>
  </div>
</Modal>

    </FormSection>
  );
};

export default SC_037;
