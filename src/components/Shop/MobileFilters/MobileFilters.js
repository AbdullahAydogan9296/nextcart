import React from 'react';
import FiltersToggleButton from './components/FiltersToggleButton';
import RowsPerPageSelect from './components/RowsPerPageSelect';
import CategorySelect from './components/CategorySelect';
import PriceRangeFilter from './components/PriceRangeFilter';
import SortOrderFilter from './components/SortOrderFilter';
import useMobileFilters from './hooks/useMobileFilters';

export default function MobileFilters({ rowsPerPage, setRowsPerPage, categories, onSelectCategory, onPriceRangeChange, onSortChange }) {
    // Using the custom hook to manage the filter states and handlers
    const {
        isFiltersOpen,
        selectedCategory,
        minPrice,
        maxPrice,
        sortOrder,
        toggleFilters,
        handleCategoryChange,
        handlePriceChange,
        handleSortChange,
        setMinPrice,
        setMaxPrice,
    } = useMobileFilters(onSelectCategory, onPriceRangeChange, onSortChange);

    return (
        <div className="md:hidden lg:hidden mb-4 flex flex-col">
            {/* Filter toggle button and rows per page selector */}
            <div className="flex justify-between items-center">
                <FiltersToggleButton toggleFilters={toggleFilters} />
                <RowsPerPageSelect rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage} />
            </div>

            {/* Conditional rendering of the filter section */}
            {isFiltersOpen && (
                <div className="mt-4 bg-white border border-gray-300 rounded-lg p-4">
                    <CategorySelect
                        categories={categories}
                        selectedCategory={selectedCategory}
                        handleCategoryChange={handleCategoryChange}
                    />
                    <PriceRangeFilter
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        setMinPrice={setMinPrice}
                        setMaxPrice={setMaxPrice}
                        handlePriceChange={handlePriceChange}
                    />
                    <SortOrderFilter
                        sortOrder={sortOrder}
                        handleSortChange={handleSortChange}
                    />
                </div>
            )}
        </div>
    );
}
