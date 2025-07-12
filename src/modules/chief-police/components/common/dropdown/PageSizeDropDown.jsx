import dropdown from "@chief-police/assets/images/dropdown.svg";

const PageSizeDropDown = ({
  options,
  value,
  onChange,
  labelBefore,
  labelAfter,
}) => {
  return (
    <div className="flex items-center justify-start gap-[12px]">
      {labelBefore && <p>{labelBefore}</p>}

      <div className="relative w-[60px]">
        <select
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full cursor-pointer rounded-[8px] bg-[#E0E0E0] py-2 ps-[6px]"
        >
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute top-1/2 right-[6px] w-[10px] -translate-y-1/2 transform">
          <img src={dropdown} alt="Dropdown icon" />
        </div>
      </div>

      {labelAfter && <p>{labelAfter}</p>}
    </div>
  );
};

export default PageSizeDropDown;
