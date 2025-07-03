import React from "react";
import ReportRow from "@review-police/components/ReportRow";
import { fullReports } from "@review-police/utils/review-police-constants";
function ReportTable() {

  return (
    <div className="mt-4 overflow-x-auto bg-white shadow-md rounded-xl">
      <table className="min-w-[700px] w-full text-sm text-left text-gray-700">
        <thead className="text-xs tracking-wider text-gray-600 uppercase bg-blue-100">
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

      <div className="flex flex-wrap items-center justify-center gap-2 my-4 text-sm">
        <p className="font-normal text-gray-600 cursor-pointer">Previous</p>
        {[1, 2, 3].map(num => (
          <div key={num} className="px-3 py-1 bg-gray-200 rounded-sm cursor-pointer">{num}</div>
        ))}
        <p className="font-normal text-gray-600 cursor-pointer">Next</p>
      </div>
    </div>
  );
}

export default ReportTable;
