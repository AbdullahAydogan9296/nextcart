import { useState } from 'react';

export default function HeaderSearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState(''); // State to manage search input

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value); // Update search term state
        onSearch(value); // Trigger search callback with the new value
    };

    return (
        <div className="flex flex-grow mx-4">
            <input
                type="text"
                placeholder="Search in products..." // Input placeholder text
                className="w-full p-2 rounded-full bg-gray-100 text-gray-900 focus:outline-none"
                value={searchTerm} // Bind input value to search term state
                onChange={handleInputChange} // Update state and trigger search on input change
            />
        </div>
    );
}