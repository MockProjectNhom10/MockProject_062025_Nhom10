import FormInput from "@public-reporter/components/common/FormInput";
import Button from "@public-reporter/components/common/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MESSAGES } from "@public-reporter/constants";

const Step1ReporterInfo = () => {
  const navigate = useNavigate();

  const handleNavigateStep2 = () => {
    navigate("/public-reporter/report/step2");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  return (
    <div className="mx-auto mb-10 w-full max-w-[700px] min-w-[300px] px-4">
      {/* header/title */}
      <div className="my-6 flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-center text-xl font-semibold text-gray-900">
          Report Information
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* fields */}
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          handleNavigateStep2();
        })}
        className="flex flex-col justify-center"
      >
        {/* fullname & email*/}
        <div className="tablet:flex-row desktop:flex-row tablet:gap-x-4 desktop:gap-x-4 flex flex-col">
          <FormInput
            label="Fullname"
            name="fullname"
            required
            error={errors?.fullname?.message}
            {...register("fullname", {
              required: MESSAGES.REQUIRED,
            })}
          />
          <FormInput
            label="Email"
            name="email"
            required
            error={errors?.email?.message}
            {...register("email", {
              required: MESSAGES.REQUIRED,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: MESSAGES.INVALID_EMAIL,
              },
            })}
          />
        </div>

        {/* phonenumber & address */}
        <div className="tablet:flex-row desktop:flex-row tablet:gap-x-4 desktop:gap-x-4 flex flex-col">
          <FormInput
            label="Phone number"
            name="phoneNumber"
            required
            error={errors?.phoneNumber?.message}
            {...register("phoneNumber", {
              required: MESSAGES.REQUIRED,
              pattern: {
                value: /^[0-9]{9,11}$/,
                message: MESSAGES.INVALID_PHONE,
              },
            })}
          />
          <FormInput label="Address" name="address" />
        </div>
        {/* Relationship to the incident radio buttons */}
        <div className="mb-2 flex flex-col">
          <label>
          Relationship to the incident{" "}
            <span className="text-red-600">
              *
              {errors?.relevance && (
                <span className="mt-1 text-sm text-red-600">
                  {errors.relevance.message}
                </span>
              )}
            </span>
          </label>

          <div className="flex flex-col gap-2 pl-4">
            {["Victim", "Witness", "Offender", "Anonymous"].map((role) => (
              <label
                key={role}
                className="flex cursor-pointer items-center gap-2"
              >
                <input
                  type="radio"
                  name="relevance"
                  value={role.toLowerCase()}
                  {...register("relevance", {
                    required: MESSAGES.REQUIRED,
                  })}
                  className="cursor-pointer accent-black"
                />
                {role}
              </label>
            ))}
          </div>
        </div>

        {/* next button */}
        <div className="mt-10 flex items-center justify-end">
          <Button variant="reporter" type="submit">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step1ReporterInfo;
