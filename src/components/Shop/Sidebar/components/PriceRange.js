import React from 'react';

const PriceRange = ({ minPrice, maxPrice, setMinPrice, setMaxPrice, handlePriceChange }) => {
    return (
        <div className="mt-8">
            {/* Title for the Price Range section */}
            <h2 className="text-xl font-bold mb-4">Price Range</h2>

            {/* Input fields for setting the minimum and maximum price */}
            <div className="flex justify-between items-center mb-4">
                <div>
                    {/* Min price input */}
                    <label className="text-sm text-gray-600">Min price</label>
                    <div className="flex items-center">
                        <input
                            type="number"
                            value={minPrice} // Bound to minPrice state
                            onChange={(e) => setMinPrice(Number(e.target.value))} // Update minPrice on change
                            className="border border-gray-300 rounded-lg p-2 w-20 text-center appearance-none"
                            min="0"
                        />
                        <span className="ml-1">$</span>
                    </div>
                </div>

                <div>
                    {/* Max price input */}
                    <label className="text-sm text-gray-600">Max price</label>
                    <div className="flex items-center">
                        <input
                            type="number"
                            value={maxPrice} // Bound to maxPrice state
                            onChange={(e) => setMaxPrice(e.target.value === '' ? '' : Number(e.target.value))} // Update maxPrice on change
                            className="border border-gray-300 rounded-lg p-2 w-20 text-center appearance-none"
                            min="0"
                        />
                        <span className="ml-1">$</span>
                    </div>
                </div>
            </div>

            {/* Button to apply the price filter */}
            <button
                onClick={() => {
                    console.log(`Applying Price Filter: Min - ${minPrice}, Max - ${maxPrice}`);
                    handlePriceChange(); // Trigger price filter
                }}
                className="bg-primary text-white px-4 py-2 rounded-lg"
            >
                Apply
            </button>
        </div>
    );
};

export default PriceRange;