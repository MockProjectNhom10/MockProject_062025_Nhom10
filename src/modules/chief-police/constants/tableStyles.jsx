
// ================= IMPORT ICONS =================
import { CircleChevronRight, Edit, Trash2 } from "lucide-react";
import Button from "@chief-police/components/common/button/Button";

// ================= TABLE STYLE VARIANTS =================
export const tableStyles = {
  default: {
    table: "min-w-full  border bg-gray-50 ",
    thead: "bg-gray-100",
    tr: "border-b bg-gray-200 last:border-b-0",
    th: "p-4 text-left text-sm font-medium text-gray-600",
    td: "p-4 text-sm text-gray-700",
  },
  status: {
    table: "min-w-full border border-gray-300  ",
    thead: "bg-gray-200",
    tr: "border-b hover:bg-gray-100",
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

// ================= TABLE CONFIGS =================

// ==== OFFICERS TABLE ====
export const officerColumns = [
  { header: "Full Name", accessor: "name" },
  { header: "Role", accessor: "role" },
  { header: "Phone Number", accessor: "phone" },
];

// ==== PRESERVATION MEASURES TABLE ====
export const preservationColumns = [
  { header: "#", accessor: "id", render: (item, index) => index + 1 },
  { header: "Preservation Measures", accessor: "measure" },
  {
    header: "",
    render: () => (
      <div className="flex space-x-2">
        <button className="text-red-500 hover:text-red-700">
          <Trash2 className="w-4 h-4" />
        </button>
        <button className="text-blue-500 hover:text-blue-700">
          <Edit className="w-4 h-4" />
        </button>
      </div>
    ),
  },
];

// ==== MEDICAL/RESCUE SUPPORT TABLE ====
export const medicalSupportColumns = [
  { header: "Medical/Rescue Unit ID", accessor: "unitId" },
  { header: "Type of Support Provided", accessor: "type" },
  { header: "Time of Arrival", accessor: "time" },
  {
    header: "",
    render: () => (
      <div className="flex space-x-2">
        <button className="text-red-500 hover:text-red-700">
          <Trash2 className="w-4 h-4" />
        </button>
        <button className="text-blue-500 hover:text-blue-700">
          <CircleChevronRight className="w-4 h-4" />
        </button>
      </div>
    ),
  },
];

// ==== INITIAL STATEMENTS TABLE ====
export const initialStatementsColumns = [
  { header: "#", render: (_item, index) => Number(index) + 1 || "-" },
  { header: "Statement Type", accessor: "type" },
  { header: "Provider", accessor: "provider" },
  { header: "Date", accessor: "date" },
  {
    header: "",
    render: () => (
      <div className="flex space-x-2">
        <button className="text-red-500 hover:text-red-700">
          <Trash2 className="w-4 h-4" />
        </button>
        <button className="text-blue-500 hover:text-blue-700">
          <Edit className="w-4 h-4" />
        </button>
        <button className="text-gray-700 hover:text-black">
          <CircleChevronRight className="w-4 h-4" />
        </button>
      </div>
    ),
  },
];

export const initialStatementsData = [
  { type: "Witness", provider: "Ms.A", date: "15/06/2025" },
  { type: "Witness", provider: "Ms.B", date: "11/04/2025" },
  { type: "Victim", provider: "Mr.C", date: "17/05/2025" },
];

// ==== SCENE DESCRIPTION TABLE ====
export const sceneDescriptionColumns = [
  { header: "#", render: (_item, index) => Number(index) + 1 || "-" },
  { header: "Title", accessor: "title" },
  { header: "Provider", accessor: "provider" },
  { header: "Date", accessor: "date" },
  {
    header: "",
    render: () => (
      <div className="flex space-x-2">
        <Trash2 className="w-4 h-4 text-red-500" />
        <Edit className="w-4 h-4 text-blue-500" />
        <CircleChevronRight className="w-4 h-4 text-gray-600" />
      </div>
    ),
  },
];

export const sceneDescriptionData = [
  { title: "Scene A", provider: "Ms.A", date: "15/06/2025" },
  { title: "Scene B", provider: "Ms.B", date: "11/04/2025" },
];

// ==== IMAGES AND VIDEO TABLE ====
export const mediaColumns = [
  { header: "#", render: (_item, index) => Number(index) + 1 || "-" },
  { header: "Media Type", accessor: "mediaType" },
  { header: "Description", accessor: "description" },
  { header: "Date", accessor: "date" },
  {
    header: "",
    render: () => (
      <div className="flex space-x-2">
        <Trash2 className="w-4 h-4 text-red-500" />
        <Edit className="w-4 h-4 text-blue-500" />
        <CircleChevronRight className="w-4 h-4 text-gray-600" />
      </div>
    ),
  },
];

export const mediaData = [
  { mediaType: "Video", description: "Front camera", date: "25/06/2025" },
  { mediaType: "Image", description: "Door view", date: "25/06/2025" },
];

// ==== PRELIMINARY PHYSICAL EVIDENCE TABLE ====
export const evidenceColumns = [
  { header: "ID", accessor: "id" },
  { header: "Location", accessor: "location" },
  { header: "Collector", accessor: "collector" },
  { header: "Time", accessor: "time" },
  {
    header: "",
    render: () => (
      <Button variant="link" className="text-sm text-blue-600">
        View details
      </Button>
    ),
  },
];

export const evidenceData = [
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
];
