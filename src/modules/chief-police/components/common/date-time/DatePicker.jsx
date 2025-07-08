import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export default function CustomDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  const CustomInput = React.forwardRef(({ onClick }, ref) => (
    <button
      type="button"
      onClick={onClick}
      ref={ref}
      className="bg-police hover:bg-police-hover flex items-center space-x-2 rounded-lg px-4 py-2 text-white transition"
    >
      <span className="text-sm font-semibold">Choose</span>
      <Calendar className="h-4 w-4" />
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
