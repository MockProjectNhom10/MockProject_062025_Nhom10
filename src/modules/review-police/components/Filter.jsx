import React from "react";
import { Funnel } from "lucide-react";

export default function Filter({ onChange }) {
  const handleChange = (e, field) => {
    onChange((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleResetAll = () => {
    onChange({
      status: "All",
      type: "All",
      severity: "All",
      date: "All",
    });
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-10 py-2 mb-6 bg-white border border-gray-200 shadow-sm rounded-2xl">
      <div className="flex items-center gap-2 text-xl font-semibold text-gray-700">
        <Funnel className="w-4 h-4" />
        Filter
      </div>
      <button
        onClick={handleResetAll}
        className="px-4 py-1.5 bg-blue-100 text-blue-700 text-sm rounded-full border border-blue-200 hover:bg-blue-200 transition"
      >
        All
      </button>
      <div className="flex flex-wrap w-full gap-3 sm:w-auto">
        <select
          className="w-full sm:w-auto appearance-none px-4 py-1.5 bg-gray-100 text-sm text-gray-700 rounded-full border border-gray-300 hover:bg-gray-200 transition"
          onChange={(e) => handleChange(e, "status")}
        >
          <option value="All">Status</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>

        <select
          className="w-full sm:w-auto appearance-none px-4 py-1.5 bg-gray-100 text-sm text-gray-700 rounded-full border border-gray-300 hover:bg-gray-200 transition"
          onChange={(e) => handleChange(e, "type")}>
          <option value="All">Crime Type</option>
          <option value="White-Collar Crimes">White-Collar Crimes</option>
          <option>Crimes Against Property</option>
          <option>Cyber Crime</option>
        </select>

        <select
          className="w-full sm:w-auto appearance-none px-4 py-1.5 bg-gray-100 text-sm text-gray-700 rounded-full border border-gray-300 hover:bg-gray-200 transition"
          onChange={(e) => handleChange(e, "severity")}
        >
          <option value="All">Severity</option>
          <option value="Minor">Minor</option>
          <option value="Moderate">Moderate</option>
          <option value="Severe">Severe</option>
        </select>

        <select
          className="w-full sm:w-auto appearance-none px-4 py-1.5 bg-gray-100 text-sm text-gray-700 rounded-full border border-gray-300 hover:bg-gray-200 transition"
          onChange={(e) => handleChange(e, "date")}
        >
          <option value="All">Created At</option>
          <option value="Today">Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>
    </div>
  );
}