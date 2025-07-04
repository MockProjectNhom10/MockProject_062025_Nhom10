import React from "react";
import {
  User,
  Users,
  Mail,
  Phone,
  MapPin,
  ShieldAlert,
  SquareActivity,
  Calendar,
  Globe,
  FileText,
} from "lucide-react";
import RelevantInformationTable from "@public-reporter/components/table/RelevantInformationTable";
import FooterNav from "@public-reporter/components/common/FooterNav";

const SC_008_FormReportDetail = () => {
  return (
    <div className="flex justify-center pb-16">
      <div className="w-200 space-y-6 bg-white pt-4">
        <div className="text-black-500 grid grid-cols-1 gap-4 rounded border p-4 text-sm shadow md:grid-cols-2">
          <p>ReportID:</p>
          <p>Status:</p>
          <p>Date:</p>
          <p>Time:</p>
        </div>

        <div className="space-y-4 rounded border p-4 shadow">
          <h1 className="text-center text-xl font-semibold text-blue-600">
            Report Detail
          </h1>

          <div>
            <h3 className="mb-4 font-semibold text-blue-600">MY INFORMATION</h3>
            <div className="grid grid-cols-1 gap-4 text-sm font-bold md:grid-cols-2">
              <p className="flex items-center gap-2">
                {" "}
                <User className="h-4 w-4" />
                Full name:
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <Mail className="h-4 w-4" />
                Email:
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <Users className="h-4 w-4" />
                Relationship to the incident:
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <Phone className="h-4 w-4" />
                Phone:
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <MapPin className="h-4 w-4" />
                Address:
              </p>
            </div>
          </div>

          <hr />

          <div>
            <h3 className="mb-4 font-semibold text-blue-600">
              INCIDENT INFORMATION
            </h3>
            <div className="grid grid-cols-1 gap-4 text-sm font-bold md:grid-cols-2">
              <p className="flex items-center gap-2">
                {" "}
                <ShieldAlert className="h-4 w-4" />
                Type of Crime:
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <SquareActivity className="h-4 w-4" />
                Severity:
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <Calendar className="h-4 w-4" />
                Datetime of occurrence:
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <Globe className="h-4 w-4" />
                State:
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <MapPin className="h-4 w-4" />
                Detailed address:
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <FileText className="h-4 w-4" />
                Description of the incident:
              </p>
            </div>
          </div>

          <h2 className="text-lg font-semibold text-blue-600">
            Relevant Information
          </h2>

          <h3 className="text-black-600 mb-4 font-semibold">
            I. Relevant Parties
          </h3>

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

            <h3 className="text-black-600 mb-4 font-semibold">
              II. Initial Evidence
            </h3>

            <RelevantInformationTable
              header={[
                "Type",
                "Evidence Location",
                "Description",
                "Attachments",
              ]}
              data={[
                ["-", "-", "-", "-"],
                ["-", "-", "-", "-"],
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SC_008_FormReportDetail;
