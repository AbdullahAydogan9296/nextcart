import React from 'react';

const NextButton = ({ currentPage, totalPages, onPageChange }) => (
    <button
        className="px-3 py-2 mx-2 text-gray-500 rounded hover:bg-gray-200 text-lg md:text-base"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
    >
        &gt;
    </button>
);

export default NextButton;
