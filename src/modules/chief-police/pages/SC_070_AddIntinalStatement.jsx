import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Dropdown from "@chief-police/components/common/dropdown/DropDown";
import FormInput from "@chief-police/components/common/input/FormInput";
import TextArea from "@chief-police/components/common/input/TextArea";
import FormSection from "@chief-police/components/sections/FormSection";
import FileUpload from "@chief-police/components/common/upload/FileUpload";
import FormDatePicker from "@chief-police/components/common/date-time/FormDatePicker";

const SC_070_AddInitialStatement = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, control, setValue } = useForm();

  const [files, setFiles] = useState([]);

  useEffect(() => {
    setValue("evidenceFiles", files);
  }, [files, setValue]);

  const handleSave = (data) => {
    console.log("Form submitted:", data);

    const newStatement = {
      ...data,
      evidenceFiles: files,
      id: Date.now(),
    };

    const existing =
      JSON.parse(localStorage.getItem("initialStatements")) || [];
    const updated = [...existing, newStatement];

    localStorage.setItem("initialStatements", JSON.stringify(updated));

    navigate(-1);
  };

  const roleOptions = [
    { label: "Witness", value: "witness" },
    { label: "Suspect", value: "suspect" },
  ];

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <FormSection
      title="ADD INITIAL STATEMENT"
      footerCancel
      footerSave
      onClickCancel={handleCancel}
      onClickSave={handleSubmit(handleSave)}
    >
      <form
        onSubmit={handleSubmit(handleSave)}
        className="space-y-6 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-[50px]"
      >
        <FormSection title="Initial information">
          <div className="border-solid-[1px] mb-[20px] rounded-[8px] border p-[20px]">
            <FormInput
              className="desktop:w-[50%] w-full"
              label="Initial name"
              name="initialName"
              {...register("initialName")}
            />
            <Controller
              name="date"
              control={control}
              render={({ field, fieldState }) => (
                <FormDatePicker
                  label="Date"
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState?.error?.message}
                  className="desktop:w-[50%] w-full"
                />
              )}
            />
            <FormInput
              className="desktop:w-[50%] w-full"
              label="Contact information"
              name="contactInformation"
              {...register("contactInformation")}
            />
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <Dropdown
                  label="Role"
                  className="desktop:w-[50%] w-full"
                  options={roleOptions}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
        </FormSection>

        <FormSection title="Detailed statement">
          <div className="rounded-[10px] border bg-gray-50 p-4 text-sm text-gray-700">
            <TextArea
              label="Content of the statement"
              name="statementContent"
              {...register("statementContent")}
            />
          </div>
          {/* <div className="mt-2 flex justify-end gap-2">
            <button className="cursor-pointer rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-700">
              Cancel
            </button>
            <button className="cursor-pointer rounded-md bg-teal-500 px-4 py-2 text-sm text-white">
              Add
            </button>
          </div> */}
        </FormSection>

        <section className="w-full rounded-xl border border-gray-200 bg-white p-5 shadow-md">
          <div className="mb-4 flex flex-col border-b pb-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
              Evidence Link
            </h2>
          </div>
          <Controller
            name="evidenceFiles"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <FileUpload files={files} setFiles={setFiles} />
            )}
          />
        </section>
      </form>
    </FormSection>
  );
};

export default SC_070_AddInitialStatement;
