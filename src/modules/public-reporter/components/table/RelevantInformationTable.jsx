import React from "react";

const RelevantInformationTable = ({ header, data }) => {
  return (
    <div className="rounded border">
      <div className="block divide-y md:hidden">
        {data.map((row, i) => (
          <div key={i} className="p-3">
            <div className="mb-1 font-medium">#{i + 1}</div>
            {header.map((col, j) => (
              <div key={j} className="text-sm text-gray-700">
                <span className="font-semibold">{col}:</span> {row[j]}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="hidden overflow-x-auto md:block">
        <table className="w-full table-fixed text-left text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="w-10 p-2">ID</th>
              {header.map((col, i) => (
                <th key={i} className="p-2 whitespace-nowrap">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-t">
                <td className="p-2 font-medium whitespace-nowrap">#{i + 1}</td>
                {row.map((cell, j) => (
                  <td key={j} className="p-2 whitespace-nowrap">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RelevantInformationTable;
