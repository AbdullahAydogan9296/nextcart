import { useState } from 'react';

export default function HeaderSearchBar({ onSearch }) {
    // State to hold the current search term input by the user
    const [searchTerm, setSearchTerm] = useState('');

    // Handle input changes and update the search term state
    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value); // Update state with the new search term
        onSearch(value); // Trigger the parent component's search function
    };

    return (
        <div className="flex flex-grow mx-4">
            <input
                type="text"
                placeholder="Search in products..." // Placeholder text for search input
                className="w-full p-2 rounded-full bg-gray-100 text-gray-900 focus:outline-none"
                value={searchTerm} // Controlled input to reflect search term state
                onChange={handleInputChange} // Call input change handler on every keystroke
            />
        </div>
    );
}
