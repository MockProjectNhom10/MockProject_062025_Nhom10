import { tableHeaders } from "@chief-police/utils/chief-police-constants";
import React from "react";

function TableHeader() {
  return (
    <thead className="bg-gray-100 text-gray-700">
      <tr>
        {tableHeaders.map((header, index) => (
          <th
            key={index}
            className="border border-gray-300 px-2 py-2 text-left"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
