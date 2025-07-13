import { Pencil, Trash2 } from "lucide-react";
import React from "react";

const RelevantInformationTable = ({ header, data, isAction }) => {
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
            {isAction && (
              <div className="text-sm text-gray-700">
                <span className="font-semibold">Action</span>
                <div className="py-2">
                  <div className="flex flex-wrap gap-3">
                    <button className="cursor-pointer text-indigo-600 hover:text-indigo-800">
                      <Pencil size={18} />
                    </button>
                    <button className="cursor-pointer text-red-600 hover:text-red-800">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            )}
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
              {isAction && (
                <th className="w-40 p-2 whitespace-nowrap">Action</th>
              )}
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
                {isAction && (
                  <td className="p-2 font-medium whitespace-nowrap">
                    <div className="py-2">
                      <div className="flex flex-wrap gap-3">
                        <button className="cursor-pointer text-indigo-600 hover:text-indigo-800">
                          <Pencil size={18} />
                        </button>
                        <button className="cursor-pointer text-red-600 hover:text-red-800">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RelevantInformationTable;
