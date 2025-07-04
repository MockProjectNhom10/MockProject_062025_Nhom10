const PaginationControls = () => {
    return (
        <div className="flex justify-center items-center gap-[12px]">
            <p className="text-[#9E9E9E]">Previous</p>
            <div className="flex gap-[12px]">
                <span className="inline-block px-[12px] py-[4px] bg-[#6B6E75] rounded-[8px] text-white">1</span>
                <span className="inline-block px-[12px] py-[4px] bg-[#E0E0E0] rounded-[8px]">2</span>
                <span className="inline-block px-[12px] py-[4px] bg-[#E0E0E0] rounded-[8px]">3</span>
            </div>
            <p className="text-[#9E9E9E]">Next</p>
        </div>
    )
}

export default PaginationControls