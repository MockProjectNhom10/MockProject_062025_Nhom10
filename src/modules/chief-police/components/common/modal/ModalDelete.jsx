import React, { useEffect } from "react";

const ModalDelete = ({ isOpen, onClose, onConfirm }) => {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-xl rounded-lg bg-white p-8 shadow-lg">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Are You Sure You Want to Permanently Delete This Evidence?
                </h2>

                <p className="text-sm text-gray-700 mb-6">
                    <span className="font-semibold text-red-600">Warning:</span> This action is irreversible. Deleting this piece of evidence will result in the permanent loss of all associated data, including its history, handling records, and any linked materials.
                    <br />
                    Please proceed only if you are absolutely certain this evidence should be removed from the system.
                </p>

                <div className="flex justify-end space-x-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
                    >
                        Yes, Delete Permanently
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalDelete;

// const ParentComponent = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const handleDelete = () => {
//         // API delete
//         setIsModalOpen(false);
//     };

//     return (
//         <div className="p-4">
//             <button
//                 onClick={() => setIsModalOpen(true)}
//                 className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//             >
//                 Delete
//             </button>

//             <ModalDelete
//                 isOpen={isModalOpen}
//                 onClose={() => setIsModalOpen(false)}
//                 onConfirm={handleDelete}
//             />
//         </div>
//     );
// }