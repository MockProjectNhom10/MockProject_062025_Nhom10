import FormInput from "@public-reporter/components/common/FormInput";
import Button from "@public-reporter/components/common/Button";
import React from "react";
import { useNavigate } from "react-router-dom";

const Step1ReporterInfo = () => {
  const navigate = useNavigate();

  const handleNavigateStep2 = () => {
    navigate("/public-reporter/report/step2");
  };
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
      <div className="flex flex-col justify-center">
        {/* fullname & email*/}
        <div className="tablet:flex-row desktop:flex-row tablet:gap-x-4 desktop:gap-x-4 flex flex-col">
          <FormInput label="Fullname" name="fullname" required />
          <FormInput label="Email" name="email" required />
        </div>

        {/* phonenumber & address */}
        <div className="tablet:flex-row desktop:flex-row tablet:gap-x-4 desktop:gap-x-4 flex flex-col">
          <FormInput label="Phone number" name="phone-number" required />
          <FormInput label="Address" name="address" />
        </div>
        {/* relevence to the incident radio buttons */}
        <div className="mb-2 flex flex-col">
          <label>
            Relevence to the incident <span className="text-red-600">*</span>
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
                  className="cursor-pointer accent-black"
                />
                {role}
              </label>
            ))}
          </div>
        </div>

        {/* next button */}
        <div className="mt-10 flex items-center justify-end">
          <Button variant="reporter" onClick={handleNavigateStep2}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Step1ReporterInfo;
