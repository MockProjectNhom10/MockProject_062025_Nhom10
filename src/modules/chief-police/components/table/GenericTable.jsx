import React from "react";
const GenericTable = ({ title, columns, data }) => {
  return (
    <div className="mb-8">
      {title && (
        <h4 className="mb-3 text-sm font-bold text-gray-700">{title}</h4>
      )}
      <div className="shadow-md">
        <table className="min-w-full border-1 border-gray-300 bg-gray-50">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="border-b-1 border-gray-300 p-4 text-left text-sm font-semibold text-gray-600"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 ? (
              data.map((item, rowIndex) => (
                <tr
                  className="border-b border-gray-300 bg-gray-200 last:border-b-0"
                  key={item.id || rowIndex}
                >
                  {columns.map((column, colIndex) => (
                    <td className="p-4 text-sm" key={colIndex}>
                      {column.render ? (
                        column.render(item)
                      ) : (
                        <span className="text-gray-700">
                          {item[column.accessor] || "-"}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="p-4 text-center text-sm text-gray-700"
                >
                  No {title ? title.split("(")[0].trim().toLowerCase() : "data"}{" "}
                  information available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GenericTable;
