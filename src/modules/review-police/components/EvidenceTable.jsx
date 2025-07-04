import React from "react";
import { FileText } from "lucide-react";

export default function EvidenceTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full rounded-md border bg-gray-50">
        <thead className="rounded-t-lg bg-gray-100">
          <tr>
            <th className="p-4 text-left text-sm font-medium text-gray-600">
              ID
            </th>
            <th className="p-4 text-left text-sm font-medium text-gray-600">
              Type
            </th>
            <th className="p-4 text-left text-sm font-medium text-gray-600">
              Evidence Location
            </th>
            <th className="p-4 text-left text-sm font-medium text-gray-600">
              Description
            </th>
            <th className="p-4 text-left text-sm font-medium text-gray-600">
              Attachments
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 last:border-b-0"
              >
                <td className="p-4 text-sm font-medium">#{item.id}</td>
                <td className="p-4 text-sm text-gray-700">
                  {item.type || "-"}
                </td>
                <td className="p-4 text-sm text-gray-700">
                  {item.location || "-"}
                </td>
                <td className="p-4 text-sm text-gray-700">
                  {item.description || "-"}
                </td>
                <td className="p-4">
                  <div className="flex items-center text-sm text-blue-600">
                    <FileText size={16} className="mr-2" />
                    {item.attachment || "-"}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="p-4 text-center text-sm text-gray-700">
                No evidence information available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
