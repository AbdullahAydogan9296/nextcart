export default function SortOrderFilter({ sortOrder, handleSortChange }) {
    return (
        <div>
            {/* Header for the sort order section */}
            <h2 className="text-xl font-bold mb-2">Sort Order</h2>
            <ul>
                <li>
                    {/* Option for sorting by price low to high */}
                    <label className="flex items-center space-x-3">
                        <input
                            type="radio"
                            value="priceLowHigh"
                            checked={sortOrder === 'priceLowHigh'}
                            onChange={() => handleSortChange('priceLowHigh')}
                            className="form-radio h-5 w-5 text-blue-600 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <span className="text-gray-700 text-lg">Price Low - High</span>
                    </label>
                </li>
                <li>
                    {/* Option for sorting by price high to low */}
                    <label className="flex items-center space-x-3">
                        <input
                            type="radio"
                            value="priceHighLow"
                            checked={sortOrder === 'priceHighLow'}
                            onChange={() => handleSortChange('priceHighLow')}
                            className="form-radio h-5 w-5 text-blue-600 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <span className="text-gray-700 text-lg">Price High - Low</span>
                    </label>
                </li>
            </ul>
        </div>
    );
}
