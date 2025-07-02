import React from "react";
import { User, Users, Mail, Phone, MapPin, ShieldAlert, SquareActivity, Calendar, Globe, FileText } from "lucide-react";
import RelevantInformationTable from "@public-reporter/components/RelevantInformationTable";
import FooterNav from "@public-reporter/components/FooterNav";

const SC_008_FormReportDetail = () => {
    return (
        <div className="flex justify-center pb-16">
            <div className="w-200 bg-white pt-4 space-y-6">

                <div className="border rounded shadow p-4 grid grid-cols-1 gap-4 text-sm text-black-500
                    md:grid-cols-2
                ">
                    <p>ReportID:</p>
                    <p>Status:</p>
                    <p>Date:</p>
                    <p>Time:</p>
                </div>

                <div className="border rounded shadow p-4 space-y-4">

                    <h1 className="text-blue-600 text-xl font-semibold text-center">Report Detail</h1>

                    <div>
                        <h3 className="text-blue-600 font-semibold mb-4">MY INFORMATION</h3>
                        <div className="grid grid-cols-1 gap-4 text-sm font-bold
                            md:grid-cols-2
                        ">
                            <p className="flex items-center gap-2"> <User className="w-4 h-4" />Full name:</p>
                            <p className="flex items-center gap-2"> <Mail className="w-4 h-4" />Email:</p>
                            <p className="flex items-center gap-2"> <Users className="w-4 h-4" />Relationship to the incident:</p>
                            <p className="flex items-center gap-2"> <Phone className="w-4 h-4" />Phone:</p>
                            <p className="flex items-center gap-2"> <MapPin  className="w-4 h-4" />Address:</p>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <h3 className="text-blue-600 font-semibold mb-4">INCIDENT INFORMATION</h3>
                        <div className="grid grid-cols-1 gap-4 text-sm font-bold
                            md:grid-cols-2
                        ">
                            <p className="flex items-center gap-2"> <ShieldAlert className="w-4 h-4" />Type of Crime:</p>
                            <p className="flex items-center gap-2"> <SquareActivity className="w-4 h-4" />Severity:</p>
                            <p className="flex items-center gap-2"> <Calendar className="w-4 h-4" />Datetime of occurrence:</p>
                            <p className="flex items-center gap-2"> <Globe className="w-4 h-4" />State:</p>
                            <p className="flex items-center gap-2"> <MapPin className="w-4 h-4" />Detailed address:</p>
                            <p className="flex items-center gap-2"> <FileText className="w-4 h-4" />Description of the incident:</p>
                        </div>
                    </div>

                    <h2 className="text-lg font-semibold text-blue-600">
                        Relevant Information
                    </h2>

                    <h3 className="text-black-600 font-semibold mb-4">I. Relevant Parties</h3>

                    <div className="mt-4 space-y-6">
                        <p className="font-medium text-sm mb-1">A/ Victim (optional)</p>
                        <RelevantInformationTable
                            header={["Full Name", "Gender", "Nationality", "Statement / Description"]}
                            data={[
                                ["-", "-", "-", "-"],
                                ["-", "-", "-", "-"]
                            ]}
                        />

                        <p className="font-medium text-sm mb-1">B/ Witness (optional)</p>
                        <RelevantInformationTable
                            header={["Full Name", "Gender", "Nationality", "Statement / Description"]}
                            data={[
                                ["-", "-", "-", "-"],
                                ["-", "-", "-", "-"]
                            ]}
                        />

                        <p className="font-medium text-sm mb-1">C/ Suspect (optional)</p>
                        <RelevantInformationTable
                            header={["Full Name", "Gender", "Nationality", "Statement / Description"]}
                            data={[
                                ["-", "-", "-", "-"],
                                ["-", "-", "-", "-"]
                            ]}
                        />

                        <p className="font-medium text-sm mb-1">D/ Accomplice (optional)</p>
                        <RelevantInformationTable
                            header={["Full Name", "Gender", "Nationality", "Statement / Description"]}
                            data={[
                                ["-", "-", "-", "-"],
                                ["-", "-", "-", "-"]
                            ]}
                        />

                        <h3 className="text-black-600 font-semibold mb-4">II. Initial Evidence</h3>

                        <RelevantInformationTable
                            header={["Type", "Evidence Location", "Description", "Attachments"]}
                            data={[
                                ["-", "-", "-", "-"],
                                ["-", "-", "-", "-"]
                            ]}
                        />

                    </div>
                </div>
            </div>

            <FooterNav />
            
        </div>
    );
};

export default SC_008_FormReportDetail;
