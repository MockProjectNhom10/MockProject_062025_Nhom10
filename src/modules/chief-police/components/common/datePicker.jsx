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
  placeholder = "Choose date",
  isClearable = false,
}) {
  const [selectedDate, setSelectedDate] = useState(value);

  const CustomInput = forwardRef(({ onClick }, ref) => (
    <button
      type="button"
      onClick={onClick}
      ref={ref}
      className="flex min-w-[117px] items-center justify-between space-x-2 rounded-lg bg-emerald-400 px-6 py-2 text-black transition hover:bg-emerald-500"
    >
      <span className="text-[16px] font-semibold text-gray-800">
        {selectedDate ? format(selectedDate, "PP") : placeholder}
      </span>
      <Calendar className="h-5 w-5" />
    </button>
  ));

  return (
    <div className="flex items-center space-x-4">
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
        popperClassName="z-50"
        calendarClassName="rounded-2xl shadow-lg bg-white"
        weekDayClassName={() => "text-xs text-gray-400 font-medium"}
        renderCustomHeader={({
          date,
          changeYear,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => {
          const years = Array.from(
            { length: 100 },
            (_, i) => new Date().getFullYear() - 50 + i,
          );

          return (
            <div className="mb-4 flex items-center justify-between px-1">
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
                className="text-4xl hover:text-emerald-700"
              >
                ‹
              </button>

              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold">
                  {format(date, "MMM")}
                </span>
                <select
                  value={date.getFullYear()}
                  onChange={(e) => changeYear(Number(e.target.value))}
                  className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-emerald-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
                className="text-4xl hover:text-emerald-700"
              >
                ›
              </button>
            </div>
          );
        }}
      />
    </div>
  );
}
