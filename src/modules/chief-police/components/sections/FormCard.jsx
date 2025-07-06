import React from "react";
import { Trash2, Pencil } from "lucide-react";

const FormCard = ({ officers }) => (
  <div className="mt-2 rounded-md border bg-white p-2 sm:p-4 lg:p-6">
    <div className="overflow-x-auto">
      <table className="w-full text-left text-xs sm:text-sm md:text-base">
        <thead>
          <tr className="bg-teal-500 text-white">
            <th className="rounded-tl-md px-2 py-1 sm:px-4 sm:py-2">
              Full Name
            </th>
            <th className="px-2 py-1 sm:px-4 sm:py-2">Role</th>
            <th className="px-2 py-1 sm:px-4 sm:py-2">Phone Number</th>
            <th className="rounded-tr-md px-2 py-1 sm:px-4 sm:py-2"></th>
          </tr>
        </thead>
        <tbody>
          {officers.map((officer, idx) => (
            <tr key={idx} className="border-b last:border-b-0">
              <td className="px-2 py-1 sm:px-4 sm:py-2">{officer.name}</td>
              <td className="px-2 py-1 sm:px-4 sm:py-2">{officer.role}</td>
              <td className="px-2 py-1 sm:px-4 sm:py-2">{officer.phone}</td>
              <td className="flex gap-2 px-2 py-1 sm:px-4 sm:py-2">
                <button className="text-gray-500 hover:text-red-600">
                  <Trash2 size={18} />
                </button>
                <button className="text-gray-500 hover:text-blue-600">
                  <Pencil size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default FormCard;
