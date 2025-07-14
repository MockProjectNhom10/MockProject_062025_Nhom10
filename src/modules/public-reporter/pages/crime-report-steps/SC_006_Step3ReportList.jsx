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
    </div>
  );
};

export default SC_006_ReportList;
