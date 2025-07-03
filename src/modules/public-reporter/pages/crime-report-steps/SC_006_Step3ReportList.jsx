import React from "react";
import { reportedSuccess } from "@public-reporter/assets/index";
import { Eye, Printer } from "lucide-react";

const SC_006_ReportList = () => {
  return (
    <div className="flex flex-col items-center py-6 sm:px-6 md:px-8">
      {/* Success Image */}
      <img
        src={reportedSuccess}
        alt="Report Success"
        className="mb-12 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24"
      />

      {/* Message */}
      <p className="mb-10 max-w-md text-center text-sm text-gray-700 sm:text-balance">
        Your report will be reviewed within 5-10 working days. <br />
        Please check the status regularly for updates. <br />
        Thank you for your submission.
      </p>

      {/* Report Table */}
      <div className="mb-12 w-full max-w-full overflow-x-auto sm:max-w-3xl md:max-w-5xl">
        <table className="mx-auto min-w-[900px] divide-y divide-gray-200 rounded-lg border border-gray-400 text-sm">
          <thead className="bg-gray-100">
            <tr className="text-left font-semibold text-gray-700">
              <th className="px-4 py-2">ReportID</th>
              <th className="px-4 py-2">Provider</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {/* Row 1 */}
            <tr className="border-t bg-white">
              <td className="px-4 py-2">#1</td>
              <td className="px-4 py-2">abcd@gmail.com</td>
              <td className="px-4 py-2">12/24/2025</td>
              <td className="px-4 py-2">20:00</td>
              <td className="px-4 py-2">
                <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-700">
                  Pending
                </span>
              </td>
              <td className="space-x-2 px-4 py-2">
                <button className="text-gray-600 hover:text-black">
                  <Eye size={18} />
                </button>
                <button className="text-gray-600 hover:text-black">
                  <Printer size={18} />
                </button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="border-t bg-white">
              <td className="px-4 py-2">#2</td>
              <td className="px-4 py-2">johndoe@example.com</td>
              <td className="px-4 py-2">12/25/2025</td>
              <td className="px-4 py-2">15:30</td>
              <td className="px-4 py-2">
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                  Approved
                </span>
              </td>
              <td className="space-x-2 px-4 py-2">
                <button className="text-gray-600 hover:text-black">
                  <Eye size={18} />
                </button>
                <button className="text-gray-600 hover:text-black">
                  <Printer size={18} />
                </button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="border-t bg-white">
              <td className="px-4 py-2">#3</td>
              <td className="px-4 py-2">janedoe@example.com</td>
              <td className="px-4 py-2">12/26/2025</td>
              <td className="px-4 py-2">10:00</td>
              <td className="px-4 py-2">
                <span className="rounded-full bg-red-100 px-2 py-1 text-xs text-red-700">
                  Rejected
                </span>
              </td>
              <td className="space-x-2 px-4 py-2">
                <button className="text-gray-600 hover:text-black">
                  <Eye size={18} />
                </button>
                <button className="text-gray-600 hover:text-black">
                  <Printer size={18} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SC_006_ReportList;
