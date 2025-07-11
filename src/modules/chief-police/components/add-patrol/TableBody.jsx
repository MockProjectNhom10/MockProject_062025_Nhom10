import { statusMap } from "@chief-police/utils/chief-police-constants";
import React from "react";

function TableBody({ users, page, itemsPerpage }) {
  let start = (page - 1) * itemsPerpage;
  return (
    <tbody>
      {users.map((user, i) => {
        const bgColor =
          user.status === 0
            ? "bg-red-200"
            : user.status === 1
              ? "bg-green-200"
              : "bg-blue-200";

        return (
          <tr key={i} className="text-gray-800">
            <td className="border border-gray-300 px-2 py-1 text-center">
              {start + i + 1}
            </td>
            <td className="border border-gray-300 px-2 py-1 text-center">
              <input type="checkbox" className="h-5 w-5 accent-blue-500" />
            </td>
            <td className="border border-gray-300 px-2 py-1">
              {user.fullName}
            </td>
            <td className={`border border-gray-300 px-2 py-1 ${bgColor}`}>
              {statusMap[user.status]}
            </td>
            <td className="border border-gray-300 px-2 py-1">{user.role}</td>
            <td className="border border-gray-300 px-2 py-1">{user.phone}</td>
            <td className="border border-gray-300 px-2 py-1">{user.zone}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
