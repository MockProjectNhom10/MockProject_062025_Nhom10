import React from "react";
import { useNavigate } from "react-router-dom";

function ReportRow({ reportId, crimeType, severity, date, fullName, status }) {
  const statusColor = {
    Approved: "text-green-600 bg-green-100",
    Pending: "text-yellow-600 bg-yellow-100",
    Rejected: "text-red-600 bg-red-100",
  };
  const navigate = useNavigate();
  const handleView = () => {
    navigate(`report-detail/${reportId}`);
  };

  return (
    <tr className="border-t transition hover:bg-gray-100">
      <td className="px-4 py-3 whitespace-nowrap">{reportId}</td>
      <td className="px-4 py-3 whitespace-nowrap">{crimeType}</td>
      <td className="px-4 py-3 whitespace-nowrap">{severity}</td>
      <td className="px-4 py-3 whitespace-nowrap">{date}</td>
      <td className="px-4 py-3 whitespace-nowrap">{fullName}</td>
      <td className="px-4 py-3 whitespace-nowrap">
        <span
          className={`inline-block rounded-2xl px-3 py-1 text-xs font-medium ${statusColor[status] || "bg-gray-100 text-gray-600"}`}
        >
          {status}
        </span>
      </td>
      <td className="px-4 py-3 text-center">
        <button
          onClick={handleView}
          className="cursor-pointer text-sm text-blue-500 hover:underline"
        >
          View
        </button>
      </td>
    </tr>
  );
}

export default ReportRow;
