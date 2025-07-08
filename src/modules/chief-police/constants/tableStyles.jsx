import { CircleChevronRight, Edit, Trash2 } from "lucide-react";

export const tableStyles = {
  default: {
    table: "min-w-full  border bg-gray-50",
    thead: "bg-gray-100",
    tr: "border-b bg-gray-200 last:border-b-0",
    th: "p-4 text-left text-sm font-medium text-gray-600",
    td: "p-4 text-sm text-gray-700",
  },
  status: {
    table: "min-w-full border border-gray-300",
    thead: "bg-gray-200",
    tr: "border-b",
    th: "p-3 text-sm text-left text-gray-600",
    td: "p-3 text-sm",
  },
  scene: {
    table: "min-w-full border border-gray-300",
    thead: "bg-teal-600 text-white",
    tr: "border-b hover:bg-teal-50",
    th: "p-3 text-sm font-medium",
    td: "p-3 text-sm",
  },
  officer: {
    table: "min-w-full border",
    thead: "bg-gray-100",
    tr: "border-b hover:bg-gray-50",
    th: "p-2 text-xs text-gray-600",
    td: "p-2 text-xs",
  },
  preservation: {
    table: "min-w-full border border-gray-300 rounded-md overflow-hidden",
    thead: "bg-[#E7EDF6] text-gray-700",
    tr: "border-b hover:bg-gray-50",
    th: "p-3 text-sm font-semibold text-left",
    td: "p-3 text-sm text-gray-800",
  },
};

// Table columns for officers
export const officerColumns = [
  { header: "Full Name", accessor: "name" },
  { header: "Role", accessor: "role" },
  { header: "Phone Number", accessor: "phone" },
];
// Table columns for preservation measures
export const preservationColumns = [
  { header: "#", accessor: "id", render: (item, index) => index + 1 },
  { header: "Preservation Measures", accessor: "measure" },
  {
    header: "",
    render: () => (
      <div className="flex space-x-2">
        <button className="text-red-500 hover:text-red-700">
          <Trash2 className="h-4 w-4" />
        </button>
        <button className="text-blue-500 hover:text-blue-700">
          <Edit className="h-4 w-4" />
        </button>
      </div>
    ),
  },
];

// Table columns for medical/rescue support
export const medicalSupportColumns = [
  { header: "Medical/Rescue Unit ID", accessor: "unitId" },
  { header: "Type of Support Provided", accessor: "type" },
  { header: "Time of Arrival", accessor: "time" },
  {
    header: "",
    render: () => (
      <div className="flex space-x-2">
        <button className="text-red-500 hover:text-red-700">
          <Trash2 className="h-4 w-4" />
        </button>
        <button className="text-blue-500 hover:text-blue-700">
          <CircleChevronRight className="h-4 w-4" />
        </button>
      </div>
    ),
  },
];
