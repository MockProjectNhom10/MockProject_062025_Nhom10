import React, { useState } from "react";
import FormInput from "@public-reporter/components/common/FormInput";
import TextArea from "@public-reporter/components/common/TextArea";
import DatePicker from "@public-reporter/components/common/DatePicker";
import RelevantPartiesTable from "@public-reporter/components/table/DisplayTable";
import { useNavigate } from "react-router-dom";
import SC_004 from "./SC_004_RelevantParties";
import SC_005 from "./SC_005_InitialEvidence";
import Modal from "@public-reporter/components/common/Modal";
import Button from "@public-reporter/components/common/Button";

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
        <div className="mt-2 flex justify-end">
          <Button variant="secondary" onClick={() => setOpenModal("SC_004")}>
            ADD
          </Button>
        </div>
      </div>
      <div className="mb-4">
        <RelevantPartiesTable label={"Initial Evidence"} />
        <div className="mt-2 flex justify-end">
          <Button variant="secondary" onClick={() => setOpenModal("SC_005")}>
            ADD
          </Button>
        </div>
      </div>
      <div className="my-10 flex items-center justify-end gap-5">
        <Button variant="secondary" onClick={handleNavigateStep1}>
          Back
        </Button>
        <Button variant="reporter" onClick={handleNavigateStep3}>
          Submit
        </Button>
      </div>
      <Modal isOpen={openModal === "SC_004"} onClose={() => setOpenModal(null)}>
        <SC_004 onClose={() => setOpenModal(null)} />
      </Modal>
      <Modal isOpen={openModal === "SC_005"} onClose={() => setOpenModal(null)}>
        <SC_005 onClose={() => setOpenModal(null)} />
      </Modal>
    </section>
  );
}

export default SC_003_Step2IncidentInformation;
