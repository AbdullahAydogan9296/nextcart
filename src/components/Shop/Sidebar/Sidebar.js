import React, { useState } from 'react';
import CategoryList from './components/CategoryList';
import PriceRange from './components/PriceRange';
import SortOrder from './components/SortOrder';

const Sidebar = ({ categories, onSelectCategory, onPriceRangeChange, onSortChange }) => {
    // State management for selected categories
    const [selectedCategories, setSelectedCategories] = useState([]);

    // State management for price range
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState('');

    // State management for sorting order
    const [sortOrder, setSortOrder] = useState('default');

    // Handle category selection changes
    const handleCategoryChange = (category) => {
        let updatedCategories;
        if (selectedCategories.includes(category)) {
            // Remove the category if it is already selected
            updatedCategories = selectedCategories.filter((c) => c !== category);
        } else {
            // Add the category if it is not selected
            updatedCategories = [...selectedCategories, category];
        }
        setSelectedCategories(updatedCategories);
    };

    // Apply selected category filters
    const handleApplyFilters = () => {
        onSelectCategory(selectedCategories);
    };

    // Handle changes in price range and apply filters
    const handlePriceChange = () => {
        const max = maxPrice === '' ? Infinity : Number(maxPrice);
        onPriceRangeChange({ minPrice, maxPrice: max });
    };

    // Handle changes in sorting order and apply the sort
    const handleSortChange = (order) => {
        setSortOrder(order);
        onSortChange(order);
    };

    return (
        <div className="p-4 hidden md:block lg:block">
            {/* Category selection component */}
            <CategoryList
                categories={categories}
                selectedCategories={selectedCategories}
                handleCategoryChange={handleCategoryChange}
                handleApplyFilters={handleApplyFilters}
            />

            {/* Price range filter component */}
            <PriceRange
                minPrice={minPrice}
                maxPrice={maxPrice}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                handlePriceChange={handlePriceChange}
            />

            {/* Sort order component */}
            <SortOrder
                sortOrder={sortOrder}
                handleSortChange={handleSortChange}
            />
        </div>
    );
};

export default Sidebar;
