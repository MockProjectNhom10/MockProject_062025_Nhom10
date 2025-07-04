import React from "react";
import {
  FileText,
  Calendar,
  MapPin,
  User,
  Phone,
  Mail,
  Users,
  ShieldAlert,
  SquareActivity,
  Globe,
} from "lucide-react";
import { fullReports } from "@review-police/utils/review-police-constants";
import PersonTable from "@review-police/components/PersonTable";
import EvidenceTable from "@review-police/components/EvidenceTable";
import UploadedFiles from "@review-police/components/UploadedFiles";
import { InfoItem } from "@review-police/components/InfoItem";
import { useParams } from "react-router-dom";
import ReportActions from "@review-police/components/ReportActions";

export default function CrimeReportDetail() {
  const { reportId } = useParams();
  const formData = fullReports.find((r) => r.reportId === reportId);

  if (!formData) {
    return <div className="p-8 text-center text-red-500">Report not found</div>;
  }

  return (
    <div className="mobile:px-6 desktop:px-8 mb-16 min-h-screen bg-gray-50 px-4 py-4">
      <div className="mx-auto max-w-4xl">
        {/* Report Header */}
        <div className="mobile:p-6 mb-6 rounded-md border bg-white p-4 shadow-sm">
          <div className="mobile:flex-row mobile:items-center mobile:justify-between flex flex-col gap-4">
            <div className="mobile:grid-cols-2 mobile:gap-8 grid grid-cols-1 gap-4">
              <InfoItem label="Report ID" value={formData.reportId} />
              <InfoItem label="Status" value={formData.status} />
            </div>
            <div className="mobile:grid-cols-2 mobile:gap-8 grid grid-cols-1 gap-4">
              <InfoItem label="Date" value={formData.date} />
              <InfoItem label="Time" value={formData.time} />
            </div>
          </div>
        </div>

        {/* Report Details */}
        <div className="mobile:p-6 rounded-lg border bg-white p-4 shadow-sm">
          <h1 className="text-police mobile:text-2xl mb-8 text-center text-xl font-bold">
            REPORT DETAIL
          </h1>

          {/* My Information */}
          <section className="mb-8">
            <h2 className="text-police mb-6 text-lg font-semibold">
              MY INFORMATION
            </h2>
            <div className="tablet:grid-cols-2 grid grid-cols-1 gap-6">
              <InfoItem
                label="Full name"
                value={formData.fullName}
                Icon={User}
              />
              <InfoItem label="Email" value={formData.email} Icon={Mail} />
              <InfoItem
                label="Relationship to the incident"
                value={formData.relationship}
                Icon={Users}
                className="tablet:col-span-2"
              />
              <InfoItem label="Phone" value={formData.phone} Icon={Phone} />
              <InfoItem
                label="Address"
                value={formData.address}
                Icon={MapPin}
                className="tablet:col-span-2"
              />
            </div>
          </section>

          {/* Incident Information */}
          <section className="mb-8">
            <h2 className="text-police mb-6 text-lg font-semibold">
              INCIDENT INFORMATION
            </h2>
            <div className="tablet:grid-cols-2 grid grid-cols-1 gap-6">
              <InfoItem
                label="Type of Crime"
                value={formData.crimeType}
                Icon={ShieldAlert}
              />
              <InfoItem
                label="Severity"
                value={formData.severity}
                Icon={SquareActivity}
              />
              <InfoItem
                label="Datetime of occurrence"
                value={formData.datetime}
                Icon={Calendar}
              />
              <InfoItem label="State" value={formData.state} Icon={Globe} />
              <InfoItem
                label="Detailed address"
                value={formData.detailedAddress}
                Icon={MapPin}
              />
              <InfoItem
                label="Description of the incident"
                value={formData.description}
                Icon={FileText}
              />
            </div>
          </section>

          {/* Relevant Information */}
          <section className="mb-8">
            <h2 className="text-police mb-6 text-lg font-semibold">
              RELEVANT INFORMATION
            </h2>
            <div className="mb-8">
              <h3 className="text-police mb-6 text-base font-bold">
                I. Relevant Parties
              </h3>
              <PersonTable
                title="A/ Victim (optional)"
                data={formData.victims}
              />
              <PersonTable
                title="B/ Witness (optional)"
                data={formData.witnesses}
              />
              <PersonTable
                title="C/ Suspect (optional)"
                data={formData.suspects}
              />
              <PersonTable
                title="D/ Accomplice (optional)"
                data={formData.accomplices}
              />
            </div>
            <div className="mb-8">
              <h3 className="text-police mb-6 text-base font-bold">
                II. Initial Evidence
              </h3>
              <EvidenceTable data={formData.evidence} />
              <UploadedFiles files={formData.uploadedFiles} />
            </div>
          </section>
          <ReportActions />
        </div>
      </div>
    </div>
  );
}
