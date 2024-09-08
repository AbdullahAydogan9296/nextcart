export default function PriceRangeFilter({ minPrice, maxPrice, setMinPrice, setMaxPrice, handlePriceChange }) {
    return (
        <div className="mb-4">
            {/* Price range filter title */}
            <h2 className="text-xl font-bold mb-2">Price Range</h2>
            <div className="flex justify-between items-center mb-4">
                <div>
                    {/* Input for minimum price */}
                    <label className="text-sm text-gray-600">Min price</label>
                    <div className="flex items-center">
                        <input
                            type="number"
                            value={minPrice}
                            onChange={(e) => setMinPrice(Number(e.target.value))}
                            className="border border-gray-300 rounded-lg p-2 w-20 text-center appearance-none"
                            min="0"
                        />
                        <span className="ml-1">$</span>
                    </div>
                </div>
                <div>
                    {/* Input for maximum price */}
                    <label className="text-sm text-gray-600">Max price</label>
                    <div className="flex items-center">
                        <input
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value === '' ? '' : Number(e.target.value))}
                            className="border border-gray-300 rounded-lg p-2 w-20 text-center appearance-none"
                            min="0"
                        />
                        <span className="ml-1">$</span>
                    </div>
                </div>
            </div>
            {/* Button to apply the price filter */}
            <button
                onClick={handlePriceChange}
                className="bg-primary text-white px-4 py-2 rounded-lg w-full"
            >
                Apply Price Filter
            </button>
        </div>
    );
}
