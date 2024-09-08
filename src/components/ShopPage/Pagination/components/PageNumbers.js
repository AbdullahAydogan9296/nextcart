import React from 'react';

const PageNumbers = ({ pages, currentPage, onPageChange }) => (
    <>
        {pages.map(page => (
            <button
                key={page}
                className={`px-4 py-2 mx-2 ${page === currentPage ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-gray-200'
                    } rounded-full text-lg md:text-base`}
                onClick={() => onPageChange(page)}
            >
                {page}
            </button>
        ))}
    </>
);

export default PageNumbers;
