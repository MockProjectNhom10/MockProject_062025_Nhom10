import { useState, useEffect } from "react";

function FilterList({ data = [], onChange, defaultActive }) {
  const [active, setActive] = useState(defaultActive || data[0]);

  useEffect(() => {
    if (onChange) {
      onChange(active);
    }
  }, [active, onChange]);

  return (
    <div className="flex justify-center gap-10 px-6 py-2 bg-white border rounded-full shadow-md">
      {data.map((item, index) => {
        const isActive = active === item;

        return (
          <div
            key={index}
            onClick={() => setActive(item)}
            className={`relative px-4 py-2 text-base font-bold cursor-pointer rounded-xl transition duration-200 ease-in-out
              ${isActive ? "text-police" : "text-gray-700 hover:text-police"}
            `}
          >
            {item}
            <span
              className={`absolute bottom-1 left-0 h-[3px] rounded-full bg-police transition-all duration-300 ease-out
                ${isActive ? "w-full" : "w-0 group-hover:w-full left-1/2 group-hover:left-0"}
              `}
            ></span>
          </div>
        );
      })}
    </div>
  );
}

export default FilterList;
