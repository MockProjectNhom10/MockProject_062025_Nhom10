import React, { useState } from "react";
import Button from "@public-reporter/components/common/Button";
import { useForm } from "react-hook-form";
import { MESSAGES } from "@public-reporter/constants";
import FormSelect from "@public-reporter/components/common/FormSelect";
import FormInput from "@public-reporter/components/common/FormInput";
import TextArea from "@public-reporter/components/common/TextArea";

const SC_004 = ({ onClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCreate = (data) => {
    onSubmit?.(data);
  };

  return (
    <form onSubmit={handleSubmit(handleCreate)} className="space-y-6">
      <h2 className="mb-1 text-center text-2xl font-bold">Relevant Parties</h2>
      <p className="mb-8 text-center text-sm text-gray-500">
        This form is used to document the roles and identities of all parties
        connected to the incident.
      </p>
      <div className="tablet:gap-6 tablet:grid-cols-2 grid grid-cols-1">
        <FormInput
          label="Full name"
          name="fullname"
          placeholder="E.g., John Michael Doe"
          {...register("fullname")}
        />
        <div>
          <FormSelect
            label="Relationship to the incident"
            name="relationshipToTheIncident"
            required
            options={[
              { label: "Victim", value: "Victim" },
              { label: "Witness", value: "Witness" },
              { label: "Suspect", value: "Suspect" },
              { label: "Accomplice", value: "Accomplice" },
            ]}
            error={errors?.relationshipToTheIncident?.message}
            {...register("relationshipToTheIncident", {
              required: MESSAGES.REQUIRED,
            })}
          />
        </div>

        <div>
          <FormSelect
            label="Gender"
            name="gender"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Unknown", value: "unknown" },
            ]}
            {...register("gender")}
          />
        </div>
        <FormInput
          label="Nationality"
          name="nationality"
          placeholder="E.g., American"
          {...register("nationality")}
        />
      </div>
      <TextArea
        label="Statement / Description"
        name="description"
        placeholder="Provide a clear and detailed description of what happened, including dates, times, locations, and people involved."
        {...register("description")}
      />
      {/* <FileUpload files={files} setFiles={setFiles} /> */}
      <div className="mt-6 flex w-full flex-wrap justify-end gap-3 sm:gap-4">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="reporter" type="submit">
          Create
        </Button>
      </div>
    </form>
  );
};

export default SC_004;
