import dropdown from "@chief-police/assets/images/dropdown.svg"

const PageSizeDropDown = ({
    options,
    value,
    onChange,
    labelBefore,
    labelAfter
}) => {
    return (
        <div className="flex justify-start items-center gap-[12px]">
            {labelBefore && <p>{labelBefore}</p>}

            <div className="relative w-[60px]">
                <select
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="appearance-none bg-[#E0E0E0] py-[4px] ps-[6px] border-2 border-solid border-black rounded-[8px] cursor-pointer w-full"
                >
                    {options.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>

                <div className="pointer-events-none absolute right-[6px] top-1/2 transform -translate-y-1/2 w-[10px]">
                    <img src={dropdown} alt="Dropdown icon" />
                </div>
            </div>

            {labelAfter && <p>{labelAfter}</p>}
        </div>
    )
}

export default PageSizeDropDown

// const ParentComponent = () => {
//     const [pageSize, setPageSize] = useState(10);
//     return (
//         <PageSizeDropDown
//             options={[1, 2, 5, 10, 25]}
//             value={pageSize}
//             onChange={(newValue) => setPageSize(newValue)}
//             labelBefore="Show"
//             labelAfter="entries"
//         />
//     )

// }

