import dropdown from "@chief-police/assets/images/dropdown.svg"

const PageSizeDropDown = () => {
    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className="flex justify-start items-center gap-[12px]">
            <p>Show</p>
            <div className="relative w-[43px] ">
                <select name="" id="" className="appearance-none bg-[#E0E0E0] max-w-[43px] py-[4px] ps-[6px] border-2 border-solid border-black rounded-[8px] cursor-pointer w-[100%]">
                    {
                        options.map((item) => {
                            return (
                                <option value={item}>{item}</option>
                            )
                        })
                    }
                </select>
                <div className="pointer-events-none absolute right-[6px] top-1/2 transform -translate-y-1/2 w-[10px]">
                    <img src={dropdown} alt="icon_dropdown" />
                </div>
            </div>
            <p>entries</p>
        </div>

    )
}

export default PageSizeDropDown