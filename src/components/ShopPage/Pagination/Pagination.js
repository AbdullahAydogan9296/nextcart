import React from 'react';
import PreviousButton from './components/PreviousButton';
import NextButton from './components/NextButton';
import PageNumbers from './components/PageNumbers';
import { calculatePages } from '../../../utils/CalculatePages';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    // Calculate the pages to display using the calculatePages utility function
    const pages = calculatePages(currentPage, totalPages);

    return (
        <div className="flex justify-center md:justify-end my-4 px-4">
            {/* Render the previous button, allowing navigation to the previous page */}
            <PreviousButton currentPage={currentPage} onPageChange={onPageChange} />

            {/* Render the page numbers for navigation */}
            <PageNumbers pages={pages} currentPage={currentPage} onPageChange={onPageChange} />

            {/* Render the next button, allowing navigation to the next page */}
            <NextButton currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </div>
    );
};

export default Pagination;
