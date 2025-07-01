import React from "react";
import ReportRow from "@review-police/components/ReportRow";

function ReportTable() {
  const reports = [
    { id: '#20462', type: 'White-Collar Crimes', severity: 'Moderate', date: '13/05/2022', reporter: 'b', status: 'Approved' },
    { id: '#20463', type: 'Crimes Against Property', severity: 'Moderate', date: '13/05/2022', reporter: 'Nguyen Van A', status: 'Approved' },
    { id: '#18933', type: 'White-Collar Crimes', severity: 'Minor', date: '22/05/2022', reporter: 'c', status: 'Approved' },
    { id: '#45169', type: 'White-Collar Crimes', severity: 'Minor', date: '15/06/2022', reporter: 'd', status: 'Pending' },
    { id: '#34304', type: 'White-Collar Crimes', severity: 'Minor', date: '06/09/2022', reporter: 'e', status: 'Pending' },
    { id: '#17188', type: 'White-Collar Crimes', severity: 'Minor', date: '25/09/2022', reporter: 'âcvdfhbbbb', status: 'Rejected' },
    { id: '#73003', type: 'White-Collar Crimes', severity: 'Minor', date: '04/10/2022', reporter: 'bbbbbbbbbbbbbbbb', status: 'Approved' },
    { id: '#58825', type: 'White-Collar Crimes', severity: 'Minor', date: '17/10/2022', reporter: 'bbbbbbbbbbbb', status: 'Approved' },
    { id: '#89094', type: 'White-Collar Crimes', severity: 'Minor', date: '01/11/2022', reporter: 'fsdfasdfs', status: 'Rejected' },
  ];

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
          {reports.map((report, index) => (
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
