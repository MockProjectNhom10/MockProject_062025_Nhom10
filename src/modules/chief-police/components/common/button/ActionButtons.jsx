import React from "react";

const colorClasses = {
  gray: "bg-gray-300 hover:bg-gray-400 text-black",
  teal: "bg-teal-500 hover:bg-teal-600 text-white",
  red: "bg-red-500 hover:bg-red-600 text-white",
};

const ActionButtons = ({ actions = [] }) => {
  return (
    <div className="flex space-x-2">
      {actions.map((action, index) => {
        const colorClass = colorClasses[action.color] || colorClasses.gray;

        return (
          <button
            key={index}
            onClick={action.onClick}
            className={`rounded-full px-4 py-2 text-xs font-medium focus:outline-none ${colorClass} cursor-pointer`}
          >
            {action.label}
          </button>
        );
      })}
    </div>
  );
};

export default ActionButtons;

// const ParentComponent = () => {
//     const handleCancel = () => {
//         console.log("Cancel API called");
//         // gọi API Cancel
//     };

//     const handleEdit = () => {
//         console.log("Edit API called");
//         // gọi API Edit
//     };

//     const handleDelete = () => {
//         console.log("Delete API called");
//         // gọi API Delete
//     };
//     return (
//         <ActionButtons
//             actions={[
//                 { label: "Cancel", onClick: handleCancel, color: "gray" },
//                 { label: "Edit", onClick: handleEdit, color: "teal" },
//                 { label: "Delete", onClick: handleDelete, color: "red" },
//             ]}
//         />
//     )

// }
