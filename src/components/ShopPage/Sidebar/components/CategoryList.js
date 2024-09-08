import React from 'react';

const CategoryList = ({ categories, selectedCategories, handleCategoryChange, handleApplyFilters }) => {
    if (!Array.isArray(categories) || categories.length === 0) {
        return <div>No categories available.</div>;
    }

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul>
                {/* Map through the categories and render each one with a checkbox */}
                {categories.map(([category, displayName]) => (
                    <li key={category}>
                        <label className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(category)} // Check if the category is selected
                                onChange={() => handleCategoryChange(category)} // Handle category selection change
                                className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 focus:ring-2"
                            />
                            <span className="text-gray-700 text-lg">{displayName}</span> {/* Display the category name */}
                        </label>
                    </li>
                ))}
            </ul>
            <button
                onClick={() => handleApplyFilters(selectedCategories)} // Apply selected filters when clicked
                className="mt-4 bg-primary text-white px-4 py-2 rounded-lg"
            >
                Apply
            </button>
        </div>
    );
};

export default CategoryList;
