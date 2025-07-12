import React from "react";
import { TriangleAlert } from "lucide-react";

const WarningModal = ({ title, message, onCancel, onConfirm }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md">
                <h2 className="text-lg font-bold text-red-600 mb-2">Warning</h2>
                <p className="text-sm text-gray-700 mb-4">{message}</p>
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 text-sm text-gray-600 hover:text-black"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WarningModal;
