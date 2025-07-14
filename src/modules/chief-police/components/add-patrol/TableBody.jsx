import React from "react";
import { statusMap } from "@chief-police/utils/chief-police-constants";

function TableBody({ users, page, itemsPerpage, selectedUsers = [], setSelectedUsers }) {
  const startIndex = (page - 1) * itemsPerpage;

  const handleToggleUser = (user) => {
    if (!setSelectedUsers) return;
    setSelectedUsers((prevSelected) => {
      const isSelected = prevSelected.some((u) => u.phone === user.phone);
      return isSelected
        ? prevSelected.filter((u) => u.phone !== user.phone)
        : [...prevSelected, user];
    });
  };

  const getStatusBgColor = (status) => {
    switch (status) {
      case 0:
        return "bg-red-200";
      case 1:
        return "bg-green-200";
      default:
        return "bg-blue-200";
    }
  };

  return (
    <tbody>
      {users.map((user, index) => {
        const isChecked = selectedUsers.some((u) => u.phone === user.phone);
        const rowNumber = startIndex + index + 1;
        const statusColor = getStatusBgColor(user.status);

        return (
          <tr key={user.phone || index} className="text-gray-800">
            <td className="border px-2 py-1 text-center">{rowNumber}</td>
            <td className="border px-2 py-1 text-center">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleToggleUser(user)}
                className="h-5 w-5 accent-blue-500 cursor-pointer"
              />
            </td>
            <td className="border px-2 py-1">{user.fullName}</td>
            <td className={`border px-2 py-1 ${statusColor}`}>{statusMap[user.status]}</td>
            <td className="border px-2 py-1">{user.role}</td>
            <td className="border px-2 py-1">{user.phone}</td>
            <td className="border px-2 py-1">{user.zone}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;