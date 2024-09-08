import React, { useState } from 'react';
import CategoryList from './components/CategoryList';
import PriceRange from './components/PriceRange';
import SortOrder from './components/SortOrder';

const Sidebar = ({ categories, onSelectCategory, onPriceRangeChange, onSortChange }) => {
    // State to manage selected categories
    const [selectedCategories, setSelectedCategories] = useState([]);

    // State for price range
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState('');

    // State for sort order
    const [sortOrder, setSortOrder] = useState('default');

    // Handle category selection and deselection
    const handleCategoryChange = (category) => {
        let updatedCategories;
        if (selectedCategories.includes(category)) {
            updatedCategories = selectedCategories.filter((c) => c !== category);
        } else {
            updatedCategories = [...selectedCategories, category];
        }
        setSelectedCategories(updatedCategories);
    };

    // Apply selected category filters
    const handleApplyFilters = () => {
        onSelectCategory(selectedCategories);
    };

    // Apply price range filter
    const handlePriceChange = () => {
        const max = maxPrice === '' ? Infinity : Number(maxPrice); // Handle empty max price
        onPriceRangeChange({ minPrice, maxPrice: max });
    };

    // Apply sort order filter
    const handleSortChange = (order) => {
        setSortOrder(order);
        onSortChange(order);
    };

    return (
        <div className="p-4 hidden md:block lg:block">
            {/* Category List with selected categories */}
            <CategoryList
                categories={categories}
                selectedCategories={selectedCategories}
                handleCategoryChange={handleCategoryChange}
                handleApplyFilters={handleApplyFilters}
            />

            {/* Price Range input */}
            <PriceRange
                minPrice={minPrice}
                maxPrice={maxPrice}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                handlePriceChange={handlePriceChange}
            />

            {/* Sort order input */}
            <SortOrder
                sortOrder={sortOrder}
                handleSortChange={handleSortChange}
            />
        </div>
    );
};

export default Sidebar;