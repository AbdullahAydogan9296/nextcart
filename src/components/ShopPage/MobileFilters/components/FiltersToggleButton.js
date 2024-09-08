export default function FiltersToggleButton({ toggleFilters }) {
    return (
        <button
            className="flex items-center p-2 bg-white text-gray-700 border border-gray-300 rounded-full hover:border-gray-500"
            onClick={toggleFilters}
        >
            <img src="/icons/filters.svg" alt="Filters" className="w-4 h-4 mr-2" />
            Filters
        </button>
    );
}
