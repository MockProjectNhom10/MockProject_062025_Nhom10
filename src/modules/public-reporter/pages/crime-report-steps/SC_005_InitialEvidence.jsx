import React, { useEffect, useState } from "react";
import FileUpload from "@public-reporter/components/common/FileUpload";
// import Button from "@public-reporter/components/common/Button";
import Button from "@public-reporter/components/common/Button";
import FormSelect from "@public-reporter/components/common/FormSelect";
import { MESSAGES } from "@public-reporter/constants";
import FormInput from "@public-reporter/components/common/FormInput";
import { useForm, Controller } from "react-hook-form";

const SC_005 = ({ onClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm();

  const [files, setFiles] = useState([]);

  useEffect(() => {
    setValue("evidenceFiles", files);
  }, [files, setValue]);

  const handleCreate = (data) => {
    console.log("SC_005 submitted data:", data);
    onSubmit?.({
      ...data,
      evidenceFiles: Array.isArray(data.evidenceFiles)
        ? data.evidenceFiles
        : [],
    });
  };

  return (
    <form onSubmit={handleSubmit(handleCreate)} className="space-y-6">
      <h2 className="mb-1 text-center text-2xl font-bold">Initial Evidence</h2>
      <p className="mb-8 text-center text-sm text-gray-500">
        This form is used to document the initial evidence connected to the
        incident.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <FormSelect
            label="Types of Evidence"
            name="typesOfEvidence"
            required
            options={[
              { label: "Physical Evidence", value: "Physical Evidence" },
              { label: "Biological Evidence", value: "Biological Evidence" },
              { label: "Trace Evidence", value: "Trace Evidence" },
              { label: "Documentary Evidence", value: "Documentary Evidence" },
              { label: "Digital evidence", value: "Digital evidence" },
            ]}
            error={errors?.typesOfEvidence?.message}
            {...register("typesOfEvidence", {
              required: MESSAGES.REQUIRED,
            })}
          />
        </div>
        <div>
          <FormInput
            label="Evidence Location"
            name="evidenceLocation"
            placeholder="E.g., At the scene, in the car,..."
            {...register("evidenceLocation")}
          />
        </div>
      </div>

      <div>
        <FormInput
          label="Evidence Description"
          name="evidenceDescription"
          placeholder="Provide a clear and detailed description of the evidence (shape, material, identifying features...)"
          {...register("evidenceDescription")}
        />
      </div>

      <Controller
        name="evidenceFiles"
        control={control}
        defaultValue={[]}
        render={({ field }) => <FileUpload files={files} setFiles={setFiles} />}
      />

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

export default SC_005;
