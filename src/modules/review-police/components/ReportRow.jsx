import React from 'react';

function ReportRow({ id, type, severity, date, reporter, status }) {
  const statusColor = {
    Approved: "text-green-600 bg-green-100",
    Pending: "text-yellow-600 bg-yellow-100",
    Rejected: "text-red-600 bg-red-100",
  };

  return (
    <tr className="transition border-t hover:bg-gray-100">
      <td className="px-4 py-3 whitespace-nowrap">{id}</td>
      <td className="px-4 py-3 whitespace-nowrap">{type}</td>
      <td className="px-4 py-3 whitespace-nowrap">{severity}</td>
      <td className="px-4 py-3 whitespace-nowrap">{date}</td>
      <td className="px-4 py-3 whitespace-nowrap">{reporter}</td>
      <td className="px-4 py-3 whitespace-nowrap">
        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-2xl ${statusColor[status] || "bg-gray-100 text-gray-600"}`}>
          {status}
        </span>
      </td>
      <td className="px-4 py-3 text-center">
        <button className="text-sm text-blue-500 cursor-pointer hover:underline">View</button>
      </td>
    </tr>
  );
}

export default ReportRow;