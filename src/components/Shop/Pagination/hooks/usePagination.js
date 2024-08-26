const usePagination = (totalPages, currentPage) => {

    // Initialize an array to hold all page numbers
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    // Determine if there is a next page
    const hasNextPage = currentPage < totalPages;
    // Determine if there is a previous page
    const hasPrevPage = currentPage > 1;

    // Return the page numbers array and the navigation booleans
    return { pageNumbers, hasNextPage, hasPrevPage };
};

export default usePagination;
