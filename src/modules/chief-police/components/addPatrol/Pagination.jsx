import React from "react";

function Pagination({ setPage, page, totalPage ,itemsPerpage}) {
  console.log(totalPage);
  return (
    <div className="flex items-center justify-between pt-4">
      <div className="text-sm text-gray-700">
        Đã hiển thị 01 đến {itemsPerpage*page} / Tổng số 24 bản ghi
      </div>
      <div className="flex items-center gap-1">
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          className="rounded border border-gray-300 px-2 py-1 hover:bg-gray-100"
        >
          &lt;
        </button>
        {new Array(totalPage).fill(null).map((_, idx) => (
          <button
            onClick={() => setPage(idx + 1)}
            className={`rounded border border-gray-300 px-3 py-1 hover:bg-gray-100 ${idx + 1 == page ? "bg-blue-100 font-medium text-blue-700" : ""}`}
          >
            {idx + 1}
          </button>
        ))}
        <button
          onClick={() => setPage(Math.min(totalPage, page + 1))}
          className="rounded border border-gray-300 px-2 py-1 hover:bg-gray-100"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Pagination;
