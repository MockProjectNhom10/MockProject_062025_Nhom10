import React, { useMemo, useState } from "react";
import { LogOut } from "lucide-react";
import SearchInput from "@chief-police/components/common/input/SearchInput";

export default function SC_015_CaseListByInvestigator() {
  const cases = useMemo(
    () => [
      {
        id: "#18933",
        crimeType: "Property Crimes",
        severity: "Misdemeanor",
        date: "22/05/2022",
        reporter: "ToLin",
        location: "New York, NY",
        status: "New case",
      },
      {
        id: "#17188",
        crimeType: "Drug Offenses",
        severity: "Misdemeanor",
        date: "25/09/2022",
        reporter: "MCK",
        location: "Seattle, WA",
        status: "Done",
      },
      {
        id: "#73003",
        crimeType: "Property Crimes",
        severity: "Misdemeanor",
        date: "04/10/2022",
        reporter: "Thai",
        location: "Seattle, WA",
        status: "Pending approve for phase 3",
      },
      {
        id: "#17188-2",
        crimeType: "Drug Offenses",
        severity: "Misdemeanor",
        date: "25/09/2022",
        reporter: "Bruce Lee",
        location: "Seattle, WA",
        status: "processing in phase 2",
      },
      {
        id: "#48125",
        crimeType: "Violent Crimes",
        severity: "Felony",
        date: "11/11/2022",
        reporter: "Andy",
        location: "Boston, MA",
        status: "New case",
      },
      {
        id: "#39177",
        crimeType: "Cyber Crimes",
        severity: "Felony",
        date: "02/12/2022",
        reporter: "Eva",
        location: "Austin, TX",
        status: "Done",
      },
      {
        id: "#58291",
        crimeType: "Traffic Offenses",
        severity: "Misdemeanor",
        date: "05/12/2022",
        reporter: "Ken",
        location: "Denver, CO",
        status: "Pending approve for phase 3",
      },
      {
        id: "#60001",
        crimeType: "Public Order",
        severity: "Misdemeanor",
        date: "09/12/2022",
        reporter: "Laura",
        location: "Miami, FL",
        status: "processing in phase 2",
      },
    ],
    [],
  );

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
    "New case": "bg-orange-100 text-orange-600",
    Done: "bg-rose-100 text-rose-600",
    "Pending approve for phase 3": "bg-emerald-100 text-emerald-600",
    "processing in phase 2": "bg-amber-100 text-amber-600",
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
      <div className="flex flex-col gap-3 border-b border-gray-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
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
              <th className="min-w-[100px] px-4 py-3 sm:px-6">Severity</th>
              <th className="min-w-[100px] px-4 py-3 sm:px-6">Date</th>
              <th className="min-w-[100px] px-4 py-3 sm:px-6">Reporter</th>
              <th className="min-w-[120px] px-4 py-3 sm:px-6">Location</th>
              <th className="min-w-[140px] px-4 py-3 sm:px-6">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {paginated.map((c) => (
              <tr key={c.id} className="odd:bg-gray-50/50">
                <td className="px-4 py-3 font-medium whitespace-nowrap text-gray-800 sm:px-6">
                  {c.id}
                </td>
                <td className="px-4 py-3 text-gray-700 sm:px-6">
                  {c.crimeType}
                </td>
                <td className="px-4 py-3 text-gray-700 sm:px-6">
                  {c.severity}
                </td>
                <td className="px-4 py-3 text-gray-700 sm:px-6">{c.date}</td>
                <td className="px-4 py-3 text-gray-700 sm:px-6">
                  {c.reporter}
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
