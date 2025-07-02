import React, { useRef } from "react";
import { Calendar } from "lucide-react";

function DatePicker() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.showPicker();
  };

  return (
    <div>
      <label className="mb-1 block font-medium text-gray-800">
        Datetime of occurrence <span className="text-red-500">*</span>
      </label>

      <div className="flex w-full tablet:max-w-md items-center rounded-md border border-gray-300 bg-[#eee] p-1.5">
        <button
          type="button"
          onClick={handleClick}
          className="flex items-center gap-2 rounded-md border border-[#9E9E9E] bg-[#E7EDF6] px-4 py-1.5 text-gray-800 shadow-sm hover:bg-gray-50"
        >
          Choose
          <Calendar className="w-4 h-4 text-gray-600" />
        </button>

        <input
          ref={inputRef}
          id="datetime"
          type="datetime-local"
          className=" hidden"
        />
      </div>
    </div>
  );
}

export default DatePicker;
