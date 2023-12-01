import React from "react";

function PaginationList({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const displayedPageNumbers = pageNumbers.filter(
    (number) =>
      number === currentPage ||
      number === currentPage - 1 ||
      number === currentPage + 1
  );

  const getButtonClasses = (isActive) => {
    const baseClasses =
      "relative inline-flex items-center rounded bg-transparent px-3 py-1.5 text-sm transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white";
    return isActive
      ? `${baseClasses} text-white bg-neutral-500`
      : `${baseClasses} text-neutral-500`;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between text-white px-4 py-3 sm:px-6">
      <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-0">
        <div className="mb-2 sm:mb-0">
          <p className="text-sm text-white">
            Showing{" "}
            <span className="font-medium">{(currentPage - 1) * 10 + 1}</span> to{" "}
            <span className="font-medium">{currentPage * 10}</span> of{" "}
            <span className="font-medium">{totalPages * 10}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={getButtonClasses(false)}
            >
              &laquo;
            </button>
            {displayedPageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => onPageChange(number)}
                className={getButtonClasses(number === currentPage)}
              >
                {number}
              </button>
            ))}
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={getButtonClasses(false)}
            >
              &raquo;
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default PaginationList;
