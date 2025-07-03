import React, { useState, Fragment } from "react";
import DropdownForm from "../../components/dropdown/Severity";
import StateDropdown from "@public-reporter/components/dropdown/State";
import CrimeDropdown from "@public-reporter/components/dropdown/CrimeTypes";
import FormInput from "@public-reporter/components/FormInput";
import TextArea from "@public-reporter/components/TextArea";
import { Pencil, Trash2 } from "lucide-react";
import DatePicker from "@public-reporter/components/DatePicker";
import RelevantPartiesTable from "@public-reporter/components/DisplayTable";
import { useNavigate } from "react-router-dom";
import SC_004 from "./SC_004_RelevantParties";
import SC_005 from "./SC_005_InitialEvidence";
import Modal from "../../components/Modal";
import { Menu, Transition } from "@headlessui/react";

function SC_003_Step2IncidentInformation() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(null); // null | 'SC_004' | 'SC_005'

  const handleNavigateStep1 = () => {
    navigate("/public-reporter/report/step1");
  };

  const handleNavigateStep3 = () => {
    navigate("/public-reporter/report/step3");
  };

  return (
    <section className="tablet:w-full mx-auto w-[95%]">
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
      <div className="mb-4">
        <RelevantPartiesTable label={"Relevant Parties"} />
        <div className="flex justify-end mt-2">
          <button
            type="button"
            className="rounded-lg bg-gray-200 px-8 py-2 font-semibold text-gray-700"
            onClick={() => setOpenModal('SC_004')}
          >
            ADD
          </button>
        </div>
      </div>
      <div className="mb-4">
        <RelevantPartiesTable label={"Initial Evidence"} />
        <div className="flex justify-end mt-2">
          <button
            type="button"
            className="rounded-lg bg-gray-200 px-8 py-2 font-semibold text-gray-700"
            onClick={() => setOpenModal('SC_005')}
          >
            ADD
          </button>
        </div>
      </div>
      <div className="my-10 flex items-center justify-end gap-5">
        <button
          className="cursor-pointer rounded-lg border border-[#9E9E9E] bg-[#E7EDF6] px-10 py-3 text-gray-700 transition hover:bg-[#d9e4f0]"
          onClick={handleNavigateStep1}
        >
          Back
        </button>
        <button
          className="bg-reporter cursor-pointer rounded-lg border px-10 py-3 text-white hover:brightness-90"
          onClick={handleNavigateStep3}
        >
          Submit
        </button>
      </div>
      <Modal isOpen={openModal === 'SC_004'} onClose={() => setOpenModal(null)}>
        <SC_004 onClose={() => setOpenModal(null)} />
      </Modal>
      <Modal isOpen={openModal === 'SC_005'} onClose={() => setOpenModal(null)}>
        <SC_005 onClose={() => setOpenModal(null)} />
      </Modal>
    </section>
  );
}

export default SC_003_Step2IncidentInformation;
