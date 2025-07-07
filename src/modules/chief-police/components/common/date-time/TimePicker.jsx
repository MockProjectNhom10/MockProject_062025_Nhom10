import { useState } from "react";

export default function TimePicker() {
  const [hour, setHour] = useState("09");
  const [minute, setMinute] = useState("32");
  const [period, setPeriod] = useState("AM");

  const hours = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const minutes = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, "0")
  );

  return (
    <div className="flex items-center space-x-3">
      {/* Time Select */}
      <div className="flex space-x-2 items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
        {/* Hour */}
        <select
          value={hour}
          onChange={(e) => setHour(e.target.value)}
          className="bg-transparent text-lg font-mono outline-none appearance-none"
        >
          {hours.map((h) => (
            <option key={h} value={h}>
              {h}
            </option>
          ))}
        </select>

        <span className="text-lg font-mono">:</span>

        {/* Minute */}
        <select
          value={minute}
          onChange={(e) => setMinute(e.target.value)}
          className="bg-transparent text-lg font-mono outline-none appearance-none"
        >
          {minutes.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      {/* AM/PM Toggle */}
      <div className="flex bg-gray-100 rounded-lg overflow-hidden shadow-sm p-1">
        <button
          className={`px-4 rounded-lg py-2 text-sm font-medium ${
            period === "AM"
              ? "bg-white text-gray-900 shadow-inner"
              : "bg-gray-100 text-gray-500"
          }`}
          onClick={() => setPeriod("AM")}
        >
          AM
        </button>
        <button
          className={`px-4 rounded-lg py-2 text-sm font-medium ${
            period === "PM"
              ? "bg-white text-gray-900 shadow-inner"
              : "bg-gray-100 text-gray-500"
          }`}
          onClick={() => setPeriod("PM")}
        >
          PM
        </button>
      </div>
    </div>
  );
}
