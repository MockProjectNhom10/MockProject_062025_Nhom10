const PaginationControls = () => {
  return (
    <div className="flex items-center justify-center gap-[12px]">
      <p className="text-[#9E9E9E]">Previous</p>
      <div className="flex gap-[12px]">
        <span className="inline-block rounded-[8px] bg-[#6B6E75] px-[12px] py-[4px] text-white">
          1
        </span>
        <span className="inline-block rounded-[8px] bg-[#E0E0E0] px-[12px] py-[4px]">
          2
        </span>
        <span className="inline-block rounded-[8px] bg-[#E0E0E0] px-[12px] py-[4px]">
          3
        </span>
      </div>
      <p className="text-[#9E9E9E]">Next</p>
    </div>
  );
};

export default PaginationControls;
