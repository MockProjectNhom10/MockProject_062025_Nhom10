// src/modules/chief-police/pages/PreliminaryInvestigation.jsx
import React, { useState, useMemo } from "react";
import GenericTable from "../components/table/GenericTable";
import PaginationControls from "../components/table/PaginationControls";
import { cases } from "../constants/preliminary-investigation-data";
import PageSizeDropDown from "../components/common/dropdown/PageSizeDropDown";
import SearchInput from "../components/common/input/SearchInput";
import { LogOut, ChevronsUpDown } from "lucide-react";

// Custom hook for sorting
function useSort(data, defaultKey = null) {
  const [sortConfig, setSortConfig] = useState({
    key: defaultKey,
    direction: "asc",
  });

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];
      if (sortConfig.key === "date") {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  function handleSort(key) {
    setSortConfig((prev) =>
      prev.key === key
        ? { key, direction: prev.direction === "asc" ? "desc" : "asc" }
        : { key, direction: "asc" },
    );
  }

  return { sortedData, sortConfig, handleSort };
}

export default function SC_013_PreliminaryInvestigation() {
  const [filter, setFilter] = useState({ keyword: "" });
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // default 10

  // Filtering logic
  const filteredCases = useMemo(() => {
    const keyword = filter.keyword.toLowerCase();
    return cases.filter((item) =>
      [
        item.caseId,
        item.typeOfCrime,
        item.severity,
        item.receivingUnit,
        item.location,
      ].some((field) => field.toLowerCase().includes(keyword)),
    );
  }, [filter.keyword]);

  // Use custom sorting hook
  const { sortedData, sortConfig, handleSort } = useSort(filteredCases);

  // Pagination logic
  const totalPage = Math.ceil(filteredCases.length / itemsPerPage);

  // Table columns definition (pure data, no JSX in header)
  const columns = [
    { header: "Case ID", accessor: "caseId" },
    { header: "Type of Crime", accessor: "typeOfCrime", sortable: true },
    { header: "Level of Severity", accessor: "severity", sortable: true },
    { header: "Date", accessor: "date", sortable: true },
    { header: "Receiving Unit", accessor: "receivingUnit" },
    { header: "Location", accessor: "location" },
    {
      header: "Status",
      accessor: "status",
      sortable: true,
      render: (item) => (
        <span
          className={`rounded-full px-2 py-2 text-xs font-semibold ${
            item.status === "Under Investigation"
              ? "bg-green-100 text-green-700"
              : item.status === "Awaiting Processing" ||
                  item.status === "Awaiting Prosecution"
                ? "bg-orange-100 text-orange-700"
                : item.status === "Closed"
                  ? "bg-red-100 text-red-700"
                  : "bg-gray-100 text-gray-700"
          } `}
        >
          {item.status}
        </span>
      ),
    },
  ];

  // Reset page to 1 when filter or itemsPerPage changes
  React.useEffect(() => {
    setPage(1);
  }, [filter.keyword, itemsPerPage]);

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      {/* Header */}
      <div className="flex flex-col items-start gap-2 bg-[#00C2A8] px-4 py-4 sm:flex-row sm:items-center sm:justify-between md:px-6">
        <div className="w-full text-left text-lg font-bold text-white sm:w-auto">
          Preliminary Investigation
        </div>
        <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end">
          <div className="text-left text-white">
            <div className="font-semibold">MATTHA, JOHN</div>
            <div className="text-xs">Sheriff</div>
          </div>
          <LogOut size={32} color="#fff" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col items-center justify-start px-2 py-4 sm:px-0 sm:py-8">
        {/* Filters, Table */}
        <div className="w-full max-w-6xl overflow-hidden rounded-md border border-blue-200 bg-white shadow-md">
          {/* Entries Dropdown & Search */}
          <div className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
            {/* Entries Dropdown */}
            <div className="flex w-full justify-start md:w-auto">
              <PageSizeDropDown
                options={[4, 10]}
                value={itemsPerPage}
                onChange={setItemsPerPage}
                labelBefore="Show"
                labelAfter="entries"
              />
            </div>
            {/* Search bar */}
            <div className="w-full md:w-1/2 md:flex-1">
              <SearchInput
                placeholder="Search..."
                value={filter.keyword}
                onChange={(e) =>
                  setFilter({ ...filter, keyword: e.target.value })
                }
              />
            </div>
          </div>
          {/* Table */}
          <div className="overflow-x-auto px-2 pb-4 sm:px-4">
            <GenericTable
              columns={columns}
              data={sortedData.slice(
                (page - 1) * itemsPerPage,
                page * itemsPerPage,
              )}
              sortConfig={sortConfig}
              onSort={handleSort}
            />
          </div>
        </div>
      </div>

      {/* Footer (Pagination) */}
      <div className="flex w-full justify-center pb-8">
        <PaginationControls
          currentPage={page}
          totalPages={totalPage}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
