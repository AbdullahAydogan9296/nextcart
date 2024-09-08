export default function CategorySelect({ categories, selectedCategory, handleCategoryChange }) {
    if (!Array.isArray(categories) || categories.length === 0) {
        return <div>No categories available.</div>;
    }

    return (
        <div className="mb-4">
            {/* Category selection title */}
            <h2 className="text-xl font-bold mb-2">Categories</h2>
            <div className="relative">
                {/* Dropdown for selecting a category */}
                <select
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="appearance-none w-full bg-white border border-gray-300 text-sm rounded-full px-4 py-2 focus:outline-none focus:border-gray-500"
                >
                    {/* Default option */}
                    <option value="">Select a category</option>
                    {/* Options generated from the categories array */}
                    {categories.map(([category, displayName]) => (
                        <option key={category} value={category}>
                            {displayName}
                        </option>
                    ))}
                </select>
                {/* Dropdown icon */}
                <img
                    src="/icons/rows-per-page.svg"
                    alt="Dropdown"
                    className="absolute top-2 right-2 w-4 h-4 pointer-events-none"
                />
            </div>
        </div>
    );
}
