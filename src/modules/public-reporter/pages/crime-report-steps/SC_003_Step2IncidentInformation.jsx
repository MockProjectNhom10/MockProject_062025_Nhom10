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
import { Controller, useForm } from "react-hook-form";
import FormSection from "@chief-police/components/sections/FormSection";
import FormSelect from "@public-reporter/components/common/FormSelect";
import { MESSAGES } from "@public-reporter/constants";

function SC_003_Step2IncidentInformation() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(null); // null | 'SC_004' | 'SC_005'

  const handleNavigateStep1 = () => {
    navigate("/public-reporter/report/step1");
  };

  const handleNavigateStep3 = () => {
    navigate("/public-reporter/report/step3");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

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
      <form
        className="grid grid-cols-1"
        onSubmit={handleSubmit((data) => {
          console.log(data);
          handleNavigateStep3();
        })}
      >
        <div className="tablet:grid-cols-2 desktop:grid-cols-2 tablet:gap-6 desktop:gap-6 grid grid-cols-1">
          {/* Type of Crime */}
          <div className="w-full">
            <FormSelect
              label="Type of crime"
              name="typeOfCrime"
              required
              options={[
                { label: "Theft", value: "theft" },
                { label: "Assault", value: "assault" },
                { label: "Vandalism", value: "vandalism" },
                { label: "Fraud", value: "fraud" },
                { label: "Harassment", value: "harassment" },
              ]}
              error={errors?.typeOfCrime?.message}
              {...register("typeOfCrime", {
                required: MESSAGES.REQUIRED,
              })}
            />
          </div>

          {/* Severity */}
          <div className="w-full">
            <FormSelect
              label="Severity"
              name="severity"
              required
              options={[
                { label: "Low", value: "low" },
                { label: "Medium", value: "medium" },
                { label: "High", value: "high" },
                { label: "Critical", value: "critical" },
              ]}
              error={errors?.severity?.message}
              {...register("severity", {
                required: MESSAGES.REQUIRED,
              })}
            />
          </div>
        </div>

        {/* Datetime of Occurrence */}
        <Controller
          name="dateOfOccurrence"
          control={control}
          rules={{ required: MESSAGES.REQUIRED }}
          render={({ field, fieldState }) => (
            <DatePicker
              value={field.value}
              onChange={field.onChange}
              error={fieldState?.error?.message}
            />
          )}
        />

        {/* Detailed Address */}
        <div>
          <FormInput
            label="Detailed address"
            name="detailedAddress"
            required
            error={errors?.detailedAddress?.message}
            {...register("detailedAddress", { required: MESSAGES.REQUIRED })}
          />
        </div>

        {/* Description */}
        <div className="">
          <TextArea
            label="Description of the incident"
            name="description"
            placeholder="Briefly describe what happened, including key facts such as time, location, and main events."
            className="min-h-30 w-full outline-0"
          />
        </div>

        <div>
          <div>
            <RelevantPartiesTable label={"Relevant Parties"} />
            <div className="mt-2 flex justify-end">
              <Button
                variant="secondary"
                onClick={() => setOpenModal("SC_004")}
              >
                ADD
              </Button>
            </div>
          </div>
          <div>
            <RelevantPartiesTable label={"Initial Evidence"} />
            <div className="mt-2 flex justify-end">
              <Button
                variant="secondary"
                onClick={() => setOpenModal("SC_005")}
              >
                ADD
              </Button>
            </div>
          </div>
        </div>

        <div className="my-10 flex items-center justify-end gap-5">
          <Button variant="secondary" onClick={handleNavigateStep1}>
            Back
          </Button>
          <Button variant="reporter" type="submit">
            Submit
          </Button>
        </div>
        <Modal
          isOpen={openModal === "SC_004"}
          onClose={() => setOpenModal(null)}
        >
          <SC_004 onClose={() => setOpenModal(null)} />
        </Modal>
        <Modal
          isOpen={openModal === "SC_005"}
          onClose={() => setOpenModal(null)}
        >
          <SC_005 onClose={() => setOpenModal(null)} />
        </Modal>
      </form>
    </section>
  );
}

export default SC_003_Step2IncidentInformation;
