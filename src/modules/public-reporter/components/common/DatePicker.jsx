import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Calendar } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

function CustomDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <label className="mb-1 block font-medium text-gray-800">
        Datetime of occurrence <span className="text-red-500">*</span>
      </label>

      <div className="tablet:max-w-md relative flex w-full items-center rounded-md border border-gray-300 bg-[#f5f7fa] p-2 gap-3 shadow-sm">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 rounded-md border border-[#9E9E9E] bg-[#E7EDF6] px-4 py-1.5 text-gray-800 font-medium hover:bg-[#d7e5f0] transition"
        >
          Choose
          <Calendar className="h-4 w-4 text-gray-600" />
        </button>

        {selectedDate && (
          <span className="text-sm text-gray-700">
            {format(selectedDate, "PPpp")}
          </span>
        )}

        {isOpen && (
          <div className="absolute left-0 top-full z-20 mt-2 rounded-md shadow-lg border border-gray-200 overflow-hidden bg-white">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                setIsOpen(false);
              }}
              showTimeSelect
              dateFormat="Pp"
              inline
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomDatePicker;
