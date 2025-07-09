import { tableStyles } from "@chief-police/constants/tableStyles";
import React from "react";
import { ChevronsUpDown } from "lucide-react";

const GenericTable = ({
  title,
  columns,
  data,
  variant = "default",
  sortConfig,
  onSort,
}) => {
  const styles = tableStyles[variant] || tableStyles.default;

  return (
    <div className="mb-8 ">
      {title && (
        <h4 className="mb-3 text-sm font-bold text-gray-700">{title}</h4>
      )}
      <div className="shadow-md">
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              {columns.map((column, index) => (
                <th key={index} className={styles.th}>
                  {column.sortable ? (
                    <span
                      className="inline-flex cursor-pointer items-center select-none"
                      onClick={() => onSort(column.accessor)}
                      style={{ userSelect: "none" }}
                    >
                      {column.header}
                      <ChevronsUpDown size={16} />
                    </span>
                  ) : (
                    column.header
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 ? (
              data.map((item, rowIndex) => (
                <tr className={styles.tr} key={item.id || rowIndex}>
                  {columns.map((column, colIndex) => (
                    <td className={styles.td} key={colIndex}>
                      {column.render ? (
                        column.render(item)
                      ) : (
                        <span>{item[column.accessor] || "-"}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="p-4 text-sm text-center text-gray-700"
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
