import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export default function CustomDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      type="button"
      onClick={onClick}
      ref={ref}
      className="flex items-center space-x-2 rounded-lg bg-emerald-400 px-6 py-2 text-black hover:bg-emerald-500 transition"
    >
      <span>Choose</span>
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
          console.log("Selected date:", date);
        }}
        customInput={<CustomInput />}
        dateFormat="PP"
      />
    </div>
  );
}
