export function calculatePages(currentPage, totalPages, maxPagesToShow = 5) {
    // Calculate the starting page number based on the current page and max pages to show
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));

    // Calculate the ending page number
    let endPage = startPage + maxPagesToShow - 1;

    // Adjust the start and end pages if the end page exceeds the total pages
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    // Create an array of page numbers to be displayed
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    // Return the calculated page numbers
    return pages;
}
