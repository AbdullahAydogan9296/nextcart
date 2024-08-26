import { useState, useEffect } from 'react';
import { fetchAllProducts } from '@/store/shopSlice';
import { useDispatch } from 'react-redux';

// Custom hook to manage the state and logic for the shop page
export default function useShopPage(categories) {
    const dispatch = useDispatch();

    // State variables to manage pagination, filters, sorting, etc.
    const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
    const [rowsPerPage, setRowsPerPage] = useState(9); // Number of rows per page for pagination
    const [filteredProducts, setFilteredProducts] = useState([]); // Array to hold filtered products
    const [priceRange, setPriceRange] = useState({ minPrice: 0, maxPrice: Infinity }); // Price range filter
    const [sortOrder, setSortOrder] = useState('default'); // Sort order filter
    const [selectedCategories, setSelectedCategories] = useState([]); // Array to hold selected categories
    const [isMobile, setIsMobile] = useState(false); // State to determine if the device is mobile

    // Effect to handle window resize and set mobile state
    useEffect(() => {
        // Validate the categories array
        if (!categories || !Array.isArray(categories)) {
            console.error('Categories data is missing or invalid.');
            return;
        }

        // Check if the window width is less than 768 pixels to determine if it's a mobile device
        setIsMobile(window.innerWidth < 768);

        // Function to handle window resize events
        const handleResize = () => {
            const wasMobile = isMobile;
            const isNowMobile = window.innerWidth < 768;
            setIsMobile(isNowMobile);

            // Reset filters when switching from mobile to desktop view
            if (wasMobile && !isNowMobile) {
                resetFilters();
            }
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile, categories]);

    // Function to reset filters to default state
    const resetFilters = () => {
        setSelectedCategories([]);
        setPriceRange({ minPrice: 0, maxPrice: Infinity });
        setSortOrder('default');
        setRowsPerPage(9);

        // Fetch all products when filters are reset
        if (categories && Array.isArray(categories)) {
            dispatch(fetchAllProducts(categories.map(category => category[0])))
                .unwrap()
                .catch(error => {
                    console.error('Error fetching all products during reset:', error);
                });
        }
    };

    // Effect to fetch all products when categories change or on initial load
    useEffect(() => {
        if (categories && categories.length > 0) {
            // Fetch all products based on provided categories
            dispatch(fetchAllProducts(categories.map(category => category[0])))
                .unwrap()
                .catch(error => {
                    console.error('Error fetching all products:', error);
                });
        }
    }, [dispatch, categories]);

    // Return all state variables and functions to be used in the component
    return {
        dispatch,
        categories,
        currentPage,
        setCurrentPage,
        rowsPerPage,
        setRowsPerPage,
        filteredProducts,
        setFilteredProducts,
        priceRange,
        setPriceRange,
        sortOrder,
        setSortOrder,
        selectedCategories,
        setSelectedCategories,
        isMobile,
        resetFilters
    };
}
