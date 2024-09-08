import { useState, useEffect } from 'react';

export default function useMobileFilters(onSelectCategory, onPriceRangeChange, onSortChange) {
    // State variables for managing filter states
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState('');
    const [sortOrder, setSortOrder] = useState('default');

    // Toggles the visibility of the filter section
    const toggleFilters = () => {
        setIsFiltersOpen(!isFiltersOpen);
    };

    // Handles category selection and updates the selected category state
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        onSelectCategory([category]);
    };


    // Handles price range selection and triggers the price range change callback
    const handlePriceChange = () => {
        const max = maxPrice === '' ? Infinity : Number(maxPrice);
        onPriceRangeChange({ minPrice, maxPrice: max });
    };

    // Handles sorting order change and updates the sort order state
    const handleSortChange = (order) => {
        setSortOrder(order);
        onSortChange(order);
    };

    // Effect to reset filter states when window is resized to a larger screen
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsFiltersOpen(false);
                setSelectedCategory('');
                setMinPrice(0);
                setMaxPrice('');
                setSortOrder('default');
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Return all states and handler functions to be used in the component
    return {
        isFiltersOpen,
        selectedCategory,
        minPrice,
        maxPrice,
        sortOrder,
        toggleFilters,
        handleCategoryChange,
        handlePriceChange,
        handleSortChange,
        setMinPrice,
        setMaxPrice,
    };
}
