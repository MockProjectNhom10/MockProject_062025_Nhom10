import { useState } from "react";

export default function TimePicker() {
  const [hour, setHour] = useState("09");
  const [minute, setMinute] = useState("32");
  const [period, setPeriod] = useState("AM");

  const hours = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0"),
  );
  const minutes = Array.from({ length: 12 }, (_, i) =>
    String(i * 5).padStart(2, "0"),
  );

  return (
    <div className="flex items-center space-x-3">
      {/* Time Select */}
      <div className="flex items-center space-x-2 rounded-lg border-1 border-gray-200 bg-gray-100 px-2 py-1 shadow-sm">
        {/* Hour */}
        <select
          value={hour}
          onChange={(e) => setHour(e.target.value)}
          className="text-md appearance-none bg-transparent font-mono outline-none"
        >
          {hours.map((h) => (
            <option key={h} value={h}>
              {h}
            </option>
          ))}
        </select>

        <span className="font-mono text-lg">:</span>

        {/* Minute */}
        <select
          value={minute}
          onChange={(e) => setMinute(e.target.value)}
          className="text-md appearance-none rounded-2xl bg-transparent font-mono outline-none"
        >
          {minutes.map((m) => (
            <option key={m} value={m} className="rounded-2xl">
              {m}
            </option>
          ))}
        </select>
      </div>

      {/* AM/PM Toggle */}
      <div className="flex overflow-hidden rounded-lg border-1 border-gray-200 bg-gray-100 shadow-sm">
        <button
          className={`rounded-lg px-3 py-2 text-xs font-medium ${
            period === "AM"
              ? "bg-white text-gray-900 shadow-inner"
              : "bg-gray-100 text-gray-500"
          }`}
          onClick={() => setPeriod("AM")}
        >
          AM
        </button>
        <button
          className={`rounded-lg px-3 py-2 text-xs font-medium ${
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
