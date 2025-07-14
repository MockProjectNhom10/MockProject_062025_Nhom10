import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Calendar } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

function FormDatePicker({
  value,
  required = false,
  onChange,
  label = "Datetime of occurrence",
  error,
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 flex w-full flex-col">
      <label className="mb-1 font-medium text-[#141522]">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative w-full">
        <div
          className={`focus-within:ring-reporter flex w-full items-center justify-between rounded-md bg-[#eee] px-3 py-1 text-sm ${
            error ? "border border-red-500" : "border border-gray-300"
          } focus-within:ring-1 focus-within:outline-none ${className}`}
        >
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 rounded-lg border bg-[#e7edf6] px-4 py-1 text-sm text-gray-800"
          >
            <span>{value ? format(value, "PPpp") : "Choose"}</span>
            <Calendar className="h-4 w-4" />
          </button>
        </div>

        {isOpen && (
          <div className="absolute z-20 mt-2 rounded-md border border-gray-200 bg-white shadow-lg">
            <DatePicker
              selected={value}
              onChange={(date) => {
                onChange(date);
                setIsOpen(false);
              }}
              showTimeSelect
              dateFormat="Pp"
              inline
            />
          </div>
        )}
      </div>

      {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
    </div>
  );
}

export default FormDatePicker;
