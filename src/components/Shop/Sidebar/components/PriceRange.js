import React from 'react';

const PriceRange = ({ minPrice, maxPrice, setMinPrice, setMaxPrice, handlePriceChange }) => {
    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Price Range</h2>
            <div className="flex justify-between items-center mb-4">
                {/* Min price input */}
                <div>
                    <label className="text-sm text-gray-600">Min price</label>
                    <div className="flex items-center">
                        <input
                            type="number"
                            value={minPrice} // Bind input value to minPrice state
                            onChange={(e) => setMinPrice(Number(e.target.value))} // Update minPrice state on change
                            className="border border-gray-300 rounded-lg p-2 w-20 text-center appearance-none"
                            min="0" // Ensure the minimum value is 0
                        />
                        <span className="ml-1">$</span>
                    </div>
                </div>

                {/* Max price input */}
                <div>
                    <label className="text-sm text-gray-600">Max price</label>
                    <div className="flex items-center">
                        <input
                            type="number"
                            value={maxPrice} // Bind input value to maxPrice state
                            onChange={(e) => setMaxPrice(e.target.value === '' ? '' : Number(e.target.value))} // Update maxPrice state on change
                            className="border border-gray-300 rounded-lg p-2 w-20 text-center appearance-none"
                            min="0" // Ensure the minimum value is 0
                        />
                        <span className="ml-1">$</span>
                    </div>
                </div>
            </div>

            {/* Button to apply the price filter */}
            <button
                onClick={handlePriceChange} // Trigger price filter when clicked
                className="bg-primary text-white px-4 py-2 rounded-lg"
            >
                Apply
            </button>
        </div>
    );
};

export default PriceRange;
