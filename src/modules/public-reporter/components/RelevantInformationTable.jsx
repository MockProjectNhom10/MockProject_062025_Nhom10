import React from "react";

export const RelevantInformationTable = ({ header, data }) => {
  return (
    <div className="rounded border">
      <table className="w-full table-fixed text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="w-10 p-2">ID</th>
            {header.map((col, i) => (
              <th key={i} className="p-2">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-t">
              <td className="p-2 font-medium">#{i + 1}</td>
              {row.map((cell, j) => (
                <td key={j} className="p-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
