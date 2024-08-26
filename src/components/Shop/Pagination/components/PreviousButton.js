import React from 'react';

const PreviousButton = ({ currentPage, onPageChange }) => (
    <button
        className="px-3 py-2 mx-2 text-gray-500 rounded hover:bg-gray-200 text-lg md:text-base"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
    >
        &lt;
    </button>
);

export default PreviousButton;
