import React from "react";
import Modal from "@chief-police/components/common/modal/Modal";

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Delete Confirmation",
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="text-center">
        <p className="mb-4 text-gray-700">
          Are You Sure You Want to Permanently Delete This Measure?
        </p>
        <article className="mb-4 text-red-600">
          <strong>Warning:</strong> This action cannot be undone. Permanently
          deleting this item will result in irreversible data loss. Please
          proceed only if you're certain that this data does not need to be
          recovered from the Trash.
        </article>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="rounded-lg bg-gray-200 px-4 py-2 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            Delete Permanently
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
