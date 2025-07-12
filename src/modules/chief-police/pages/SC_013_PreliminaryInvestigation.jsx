// src/modules/chief-police/pages/PreliminaryInvestigation.jsx
import React, { useMemo, useState } from "react";
import { LogOut } from "lucide-react";
import SearchInput from "@chief-police/components/common/input/SearchInput";
import { cases } from "../constants/preliminary-investigation-data";

export default function SC_013_PreliminaryInvestigation() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(4);

  const filtered = useMemo(() => {
    if (!search.trim()) return cases;
    return cases.filter((c) =>
      Object.values(c).some((v) =>
        v.toString().toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }, [cases, search]);

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage,
  );

  const statusStyles = {
    "Under Investigation": "bg-green-100 text-green-700",
    "Awaiting Processing": "bg-orange-100 text-orange-700",
    "Awaiting Prosecution": "bg-orange-100 text-orange-700",
    Closed: "bg-red-100 text-red-700",
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ---------- HEADER ---------- */}
      <div className="flex flex-col bg-[#E7EDF6]">
        <div className="my-4 flex items-center justify-end gap-4 self-end bg-[#E0E0E0] p-3 px-4 sm:my-8 sm:px-8">
          {/* User info */}
          <div className="flex flex-col text-right">
            <span className="text-sm font-semibold text-gray-800 uppercase">
              MATTHA,_JOHN
            </span>
            <span className="text-xs text-gray-500">Sheriff</span>
          </div>

          {/* Log‑out button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition hover:bg-gray-50"
            title="Log out"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>

        <div className="self-start rounded-t-lg bg-white px-6 py-2 text-sm font-medium text-gray-800 sm:px-8">
          Preliminary Investigation
        </div>
      </div>

      {/* ---------- TOOLBAR ---------- */}
      <div className="flex flex-col gap-3 border-gray-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        {/* Show … entries */}
        <div className="flex items-center gap-2">
          <span className="text-sm whitespace-nowrap">Show</span>
          <select
            value={perPage}
            onChange={(e) => {
              setPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="rounded-lg border border-gray-200 bg-gray-100 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none"
          >
            {[4, 8, 10, 25, 50].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <span className="text-sm whitespace-nowrap">entries</span>
        </div>

        {/* Search box (icon inside) */}
        <SearchInput
          className="w-full max-w-xs"
          placeholder="Search…"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* ---------- TABLE ---------- */}
      <div className="mx-4 overflow-x-auto shadow-sm sm:mx-6 lg:mx-8">
        <table className="min-w-full divide-y divide-gray-100 text-xs sm:text-sm">
          <thead className="bg-gray-50 text-left font-medium text-gray-600">
            <tr>
              <th className="min-w-[100px] px-4 py-3 sm:px-6">Case_ID</th>
              <th className="min-w-[120px] px-4 py-3 sm:px-6">Type_of_Crime</th>
              <th className="min-w-[120px] px-4 py-3 sm:px-6">Severity</th>
              <th className="min-w-[120px] px-4 py-3 sm:px-6">Date</th>
              <th className="min-w-[120px] px-4 py-3 sm:px-6">
                Receiving_Unit
              </th>
              <th className="min-w-[120px] px-4 py-3 sm:px-6">Location</th>
              <th className="min-w-[120px] px-4 py-3 sm:px-6">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {paginated.map((c) => (
              <tr key={c.caseId} className="odd:bg-gray-50/50">
                <td className="px-4 py-3 font-medium whitespace-nowrap text-gray-800 sm:px-6">
                  {c.caseId}
                </td>
                <td className="px-4 py-3 text-gray-700 sm:px-6">
                  {c.typeOfCrime}
                </td>
                <td className="px-4 py-3 text-gray-700 sm:px-6">
                  {c.severity}
                </td>
                <td className="px-4 py-3 text-gray-700 sm:px-6">{c.date}</td>
                <td className="px-4 py-3 text-gray-700 sm:px-6">
                  {c.receivingUnit}
                </td>
                <td className="px-4 py-3 text-gray-700 sm:px-6">
                  {c.location}
                </td>
                <td className="px-4 py-3 sm:px-6">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${statusStyles[c.status]}`}
                  >
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------- PAGINATION ---------- */}
      <div className="flex items-center justify-center gap-4 py-6">
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-700 transition enabled:hover:bg-gray-50 disabled:opacity-40"
        >
          Previous
        </button>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-[#6B6E75] text-sm font-medium text-white">
          {currentPage}
        </span>
        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-700 transition enabled:hover:bg-gray-50 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
