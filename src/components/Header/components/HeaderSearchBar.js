export default function HeaderSearchBar() {
    return (
        <div className="flex flex-grow mx-4">
            <input
                type="text"
                placeholder="Search in products..."
                className="w-full p-2 rounded-full bg-gray-100 text-gray-900 focus:outline-none"
            />
        </div>
    );
}
