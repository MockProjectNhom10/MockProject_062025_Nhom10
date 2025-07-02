import React from "react";
import { RelevantInformationTable } from "../components/RelevantInformationTable";

const SC_001_FormReportDetail = () => {
  return (
    <div className="space-y-6 rounded-lg bg-white p-6 shadow">
      <div>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
          <p>ReportID:</p>
          <p>Status:</p>
          <p>Date:</p>
          <p>Time:</p>
        </div>
      </div>

      <hr />

      <h1 className="mb-4 text-center text-xl font-semibold">Report Detail</h1>

      <div>
        <h3 className="mb-4 font-semibold text-red-600">MY INFORMATION</h3>
        <div className="grid grid-cols-2 gap-4 text-sm font-bold">
          <p>Full name:</p>
          <p>Email:</p>
          <p>Relationship to the incident:</p>
          <p>Phone:</p>
          <p>Address:</p>
        </div>
      </div>

      <hr />

      <div>
        <h3 className="mb-4 font-semibold text-red-600">
          INCIDENT INFORMATION
        </h3>
        <div className="grid grid-cols-2 gap-4 text-sm font-bold">
          <p>Type of Crime:</p>
          <p>Severity:</p>
          <p>Datetime of occurrence:</p>
          <p>State:</p>
          <p>Detailed address:</p>
          <p>Description of the incident:</p>
        </div>
      </div>

      <h2 className="mt-8 mb-2 text-lg font-semibold text-red-600">
        Relevant Information
      </h2>

      <h3 className="mb-4 font-semibold text-blue-600">I. Relevant Parties</h3>

      <div className="mt-4 space-y-6">
        <p className="mb-1 text-sm font-medium">A/ Victim (optional)</p>
        <RelevantInformationTable
          header={[
            "Full Name",
            "Gender",
            "Nationality",
            "Statement / Description",
          ]}
          data={[
            ["-", "-", "-", "-"],
            ["-", "-", "-", "-"],
          ]}
        />

        <p className="mb-1 text-sm font-medium">B/ Witness (optional)</p>
        <RelevantInformationTable
          header={[
            "Full Name",
            "Gender",
            "Nationality",
            "Statement / Description",
          ]}
          data={[
            ["-", "-", "-", "-"],
            ["-", "-", "-", "-"],
          ]}
        />

        <p className="mb-1 text-sm font-medium">C/ Suspect (optional)</p>
        <RelevantInformationTable
          header={[
            "Full Name",
            "Gender",
            "Nationality",
            "Statement / Description",
          ]}
          data={[
            ["-", "-", "-", "-"],
            ["-", "-", "-", "-"],
          ]}
        />

        <p className="mb-1 text-sm font-medium">D/ Accomplice (optional)</p>
        <RelevantInformationTable
          header={[
            "Full Name",
            "Gender",
            "Nationality",
            "Statement / Description",
          ]}
          data={[
            ["-", "-", "-", "-"],
            ["-", "-", "-", "-"],
          ]}
        />

        <h3 className="mb-4 font-semibold text-blue-600">
          II. Initial Evidence
        </h3>

        <RelevantInformationTable
          header={["Type", "Evidence Location", "Description", "Attachments"]}
          data={[
            ["-", "-", "-", "-"],
            ["-", "-", "-", "-"],
          ]}
        />
      </div>
    </div>
  );
};

export default SC_001_FormReportDetail;
