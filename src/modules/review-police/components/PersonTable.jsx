import React from "react";

export default function PersonTable({ title, data }) {
  return (
    <div className="mb-8">
      <h4 className="mb-3 text-sm font-medium text-gray-700">{title}</h4>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-md border bg-gray-50">
          <thead className="rounded-t-lg bg-gray-100">
            <tr>
              <th className="p-4 text-left text-sm font-medium text-gray-600">
                ID
              </th>
              <th className="p-4 text-left text-sm font-medium text-gray-600">
                Full Name
              </th>
              <th className="p-4 text-left text-sm font-medium text-gray-600">
                Gender
              </th>
              <th className="p-4 text-left text-sm font-medium text-gray-600">
                Nationality
              </th>
              <th className="p-4 text-left text-sm font-medium text-gray-600">
                Statement / Description
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 ? (
              data.map((person) => (
                <tr
                  key={person.id}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <td className="p-4 text-sm font-medium">#{person.id}</td>
                  <td className="p-4 text-sm text-gray-700">
                    {person.fullName || "-"}
                  </td>
                  <td className="p-4 text-sm text-gray-700">
                    {person.gender || "-"}
                  </td>
                  <td className="p-4 text-sm text-gray-700">
                    {person.nationality || "-"}
                  </td>
                  <td className="p-4 text-sm text-gray-700">
                    {person.statement || "-"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="p-4 text-center text-sm text-gray-700"
                >
                  No {title.split("(")[0].trim().toLowerCase()} information
                  available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
