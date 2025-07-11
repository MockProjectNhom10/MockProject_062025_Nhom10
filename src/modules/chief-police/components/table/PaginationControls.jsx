const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => currentPage > 1 && onPageChange(currentPage - 1);
  const handleNext = () =>
    currentPage < totalPages && onPageChange(currentPage + 1);
  const handlePageClick = (page) => onPageChange(page);

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (startPage > 1) pages.unshift("...");
    if (endPage < totalPages) pages.push("...");

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`rounded-md px-3 py-2 text-sm ${
          currentPage === 1
            ? "cursor-not-allowed bg-gray-200 text-gray-400"
            : "cursor-pointer bg-gray-100 hover:bg-gray-200"
        }`}
      >
        Previous
      </button>

      <div className="flex gap-2">
        {pageNumbers.map((page, index) =>
          typeof page === "number" ? (
            <button
              key={index}
              onClick={() => handlePageClick(page)}
              className={`flex h-8 w-8 items-center justify-center rounded-md ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          ) : (
            <span
              key={index}
              className="flex h-8 w-8 items-center justify-center"
            >
              ...
            </span>
          ),
        )}
      </div>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`rounded-md px-3 py-2 text-sm ${
          currentPage === totalPages
            ? "cursor-not-allowed bg-gray-200 text-gray-400"
            : "cursor-pointer bg-gray-100 hover:bg-gray-200"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;

// const ParentComponent = () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(0);
//     const totalItems = 24; // mock data
//     const itemsPerPage = 10;

//     // dữ liệu từ API
//     useEffect(() => {
//         const total = Math.ceil(totalItems / itemsPerPage);
//         setTotalPages(total);
//     }, [totalItems, itemsPerPage]);

//     const handlePageChange = (newPage) => {
//         setCurrentPage(newPage);
//         fetchData(newPage); // Gọi API với trang mới
//     }
//     return (
//         <PaginationControls
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={handlePageChange}
//         />
//     )

// }
