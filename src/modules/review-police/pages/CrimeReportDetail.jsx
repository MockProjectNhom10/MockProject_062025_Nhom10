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

export default function CrimeReportDetail() {

  const { reportId } = useParams();
  const formData = fullReports.find((r) => r.reportId === reportId);

  if (!formData) {
    return <div className="p-8 text-center text-red-500">Report not found</div>;
  }
  
  return (
    <div className="min-h-screen px-4 py-4 mb-16 mobile:px-6 desktop:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Report Header */}
        <div className="p-4 mb-6 bg-white border rounded-md shadow-sm mobile:p-6">
          <div className="flex flex-col gap-4 mobile:flex-row mobile:items-center mobile:justify-between">
            <div className="grid grid-cols-1 gap-4 mobile:grid-cols-2 mobile:gap-8">
              <InfoItem label="Report ID" value={formData.reportId} />
              <InfoItem label="Status" value={formData.status} />
            </div>
            <div className="grid grid-cols-1 gap-4 mobile:grid-cols-2 mobile:gap-8">
              <InfoItem label="Date" value={formData.date} />
              <InfoItem label="Time" value={formData.time} />
            </div>
          </div>
        </div>

        {/* Report Details */}
        <div className="p-4 bg-white border rounded-lg shadow-sm mobile:p-6">
          <h1 className="mb-8 text-xl font-bold text-center text-police mobile:text-2xl">
            REPORT DETAIL
          </h1>

          {/* My Information */}
          <section className="mb-8">
            <h2 className="mb-6 text-lg font-semibold text-police">
              MY INFORMATION
            </h2>
            <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
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
            <h2 className="mb-6 text-lg font-semibold text-police">
              INCIDENT INFORMATION
            </h2>
            <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
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
            <h2 className="mb-6 text-lg font-semibold text-police">
              RELEVANT INFORMATION
            </h2>
            <div className="mb-8">
              <h3 className="mb-6 text-base font-bold text-police">
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
              <h3 className="mb-6 text-base font-bold text-police">
                II. Initial Evidence
              </h3>
              <EvidenceTable data={formData.evidence} />
              <UploadedFiles files={formData.uploadedFiles} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
