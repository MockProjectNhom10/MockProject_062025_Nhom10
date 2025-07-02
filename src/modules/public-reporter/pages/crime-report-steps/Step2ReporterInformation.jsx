import React from "react";
import DropdownForm from "@public-reporter/components/dropdown/Severity";
import StateDropdown from "@public-reporter/components/dropdown/State";
import CrimeDropdown from "@public-reporter/components/dropdown/CrimeTypes";
import FormInput from "@public-reporter/components/FormInput";
import TextArea from "@public-reporter/components/TextArea";
import { Pencil, Trash2 } from "lucide-react";
import DatePicker from "@public-reporter/components/DatePicker";
import RelevantPartiesTable from "@public-reporter/components/DisplayTable";

function Step2ReporterInfo() {
  return (
    <section className="mx-auto w-[90%]">
      {/* Section Heading */}
      <div className="my-6 flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-center text-xl font-semibold text-gray-900">
          Incident Information
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Form */}
      <form className="tablet:grid-cols-2 grid grid-cols-1 gap-6">
        {/* Type of Crime */}
        <div className="">
          <label className="mb-1 block font-medium">
            Type of crime <span className="text-red-500">*</span>
          </label>
          <select className="w-full rounded border border-gray-300 bg-[#eee] px-3 py-2">
            <option>Select an option</option>
          </select>
        </div>

        {/* Severity */}
        <div>
          <label className="mb-1 block font-medium">
            Type of crime <span className="text-red-500">*</span>
          </label>
          <select className="w-full rounded border border-gray-300 bg-[#eee] px-3 py-2">
            <option>Select an option</option>
          </select>
        </div>

        {/* Datetime of Occurrence */}
        <DatePicker />
        <br />

        {/* Detailed Address */}
        <FormInput label="Detailed address" name="detailedAddress" required />
        {/* State */}
        <div>
          <label className="mb-1 block font-medium">
            Type of crime <span className="text-red-500">*</span>
          </label>
          <select className="w-full rounded border border-gray-300 bg-[#eee] px-3 py-2">
            <option>Select an option</option>
          </select>
        </div>
        {/* Description */}
        <div className="md:col-span-2">
          <TextArea
            label="Description of the incident"
            name="description"
            placeholder="Briefly describe what happened, including key facts such as time, location, and main events."
            className="min-h-30 w-full outline-0"
          />
        </div>
      </form>
      <RelevantPartiesTable label={"Relevant Parties"} />
      <RelevantPartiesTable label={"Initial Evidence"} />

      <div className="my-10 flex items-center justify-end gap-5">
        <button className="border rounded-lg border-[#9E9E9E] bg-[#E7EDF6] px-10 py-3 text-gray-700 transition hover:bg-[#d9e4f0]">
          Back
        </button>
        <button className="bg-reporter cursor-pointer rounded-lg border px-10 py-3 text-white hover:brightness-90">
          Submit
        </button>
      </div>
    </section>
  );
}

export default Step2ReporterInfo;
