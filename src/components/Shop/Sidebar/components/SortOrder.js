import React from 'react';

const SortOrder = ({ sortOrder, handleSortChange }) => {
    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Sort Order</h2>
            <ul>
                <li>
                    {/* Radio button for sorting by price: Low to High */}
                    <label className="flex items-center space-x-3">
                        <input
                            type="radio"
                            value="priceLowHigh"
                            checked={sortOrder === 'priceLowHigh'} // Check if the current sort order is 'priceLowHigh'
                            onChange={() => handleSortChange('priceLowHigh')} // Change sort order to 'priceLowHigh'
                            className="form-radio h-5 w-5 text-blue-600 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <span className="text-gray-700 text-lg">Price Low - High</span>
                    </label>
                </li>
                <li>
                    {/* Radio button for sorting by price: High to Low */}
                    <label className="flex items-center space-x-3">
                        <input
                            type="radio"
                            value="priceHighLow"
                            checked={sortOrder === 'priceHighLow'} // Check if the current sort order is 'priceHighLow'
                            onChange={() => handleSortChange('priceHighLow')} // Change sort order to 'priceHighLow'
                            className="form-radio h-5 w-5 text-blue-600 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <span className="text-gray-700 text-lg">Price High - Low</span>
                    </label>
                </li>
            </ul>
        </div>
    );
};

export default SortOrder;
