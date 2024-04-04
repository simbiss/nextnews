import React from "react";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, paginate }) => {
    const accessiblePages = Math.min(5, totalPages);

    const pageNumbers = Array.from({ length: accessiblePages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center items-center mt-4 space-x-1">
            {pageNumbers.map(number => (
                <button
                    key={number}
                    className={`px-3 py-1 rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-blue-500 hover:text-white'}`}
                    onClick={() => paginate(number)}
                    disabled={currentPage === number}
                >
                    {number}
                </button>
            ))}
            <span className="text-white"> ... </span>
            <span className="px-3 py-1 rounded bg-white text-gray-700">
                {totalPages}
            </span>
        </div>
    );
}

export default Pagination;