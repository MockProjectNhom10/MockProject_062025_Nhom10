import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export default function CustomDatePicker({
  value = null,
  onChange,
  minDate,
  maxDate,
  placeholder = "Choose",
  isClearable = false,
}) {
  const [selectedDate, setSelectedDate] = useState(value);

  const CustomInput = React.forwardRef(({ onClick }, ref) => (
    <button
      type="button"
      onClick={onClick}
      ref={ref}
      className="flex items-center space-x-2 rounded-lg bg-emerald-400 px-6 py-2 text-black transition hover:bg-emerald-500"
    >
      <span>{placeholder}</span>
      <Calendar className="h-5 w-5" />
    </button>
  ));

  return (
    <div className="flex items-center space-x-4">
      {selectedDate && (
        <span className="text-sm text-gray-800">
          {format(selectedDate, "PP")}
        </span>
      )}

      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          if (onChange) onChange(date);
        }}
        customInput={<CustomInput />}
        dateFormat="PP"
        placeholderText={placeholder}
        isClearable={isClearable}
        minDate={minDate}
        maxDate={maxDate}
        todayButton="Today"
        showPopperArrow={false}
        popperPlacement="bottom-start"
      />
    </div>
  );
}
