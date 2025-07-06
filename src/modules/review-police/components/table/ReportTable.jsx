import React from "react";
import ReportRow from "@review-police/components/common/ReportRow";
import { fullReports } from "@review-police/utils/review-police-constants";
function ReportTable() {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl bg-white shadow-md">
      <table className="w-full min-w-[700px] text-left text-sm text-gray-700">
        <thead className="bg-blue-100 text-xs tracking-wider text-gray-600 uppercase">
          <tr>
            <th className="px-4 py-3">Report ID</th>
            <th className="px-4 py-3">Type of Crime</th>
            <th className="px-4 py-3">Severity</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Reporter</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {fullReports.map((report, index) => (
            <ReportRow key={index} {...report} />
          ))}
        </tbody>
      </table>

      <div className="my-4 flex flex-wrap items-center justify-center gap-2 text-sm">
        <p className="cursor-pointer font-normal text-gray-600">Previous</p>
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="cursor-pointer rounded-sm bg-gray-200 px-3 py-1"
          >
            {num}
          </div>
        ))}
        <p className="cursor-pointer font-normal text-gray-600">Next</p>
      </div>
    </div>
  );
}

export default ReportTable;
