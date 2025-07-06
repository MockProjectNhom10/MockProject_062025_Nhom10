import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const RelevantPartiesTable = ({ label }) => {
  return (
    <section className="my-10">
      {/* Title */}
      <div className="my-6 flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-center text-xl font-semibold text-gray-900">
          {label}
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100 text-left text-sm font-medium text-gray-900">
            <tr>
              <th className="px-4 py-2 whitespace-nowrap">ID</th>
              <th className="px-4 py-2 whitespace-nowrap">Relevant Role</th>
              <th className="px-4 py-2 whitespace-nowrap">Name</th>
              <th className="px-4 py-2 whitespace-nowrap">Statement</th>
              <th className="px-4 py-2 whitespace-nowrap">Attachments</th>
              <th className="px-4 py-2 whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr>
              <td className="px-4 py-2">#1</td>
              <td className="px-4 py-2">Witness</td>
              <td className="px-4 py-2 text-gray-500">—</td>
              <td className="px-4 py-2 text-gray-500">—</td>
              <td className="px-4 py-2 text-blue-600 underline">
                File Title.png
              </td>
              <td className="px-4 py-2">
                <div className="flex flex-wrap gap-2">
                  <button className="text-indigo-600 hover:text-indigo-800">
                    <Pencil size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Add Button */}
      {/* <div className="mt-4 flex justify-end">
        <button className="cursor-pointer rounded border border-[#9E9E9E] bg-[#E7EDF6] px-10 py-1 text-gray-700 transition hover:bg-[#d9e4f0]">
          ADD
        </button>
      </div> */}
    </section>
  );
};

export default RelevantPartiesTable;
