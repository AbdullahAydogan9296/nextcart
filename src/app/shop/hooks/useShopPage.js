import { useState, useEffect } from 'react';
import { fetchAllProducts } from '@/store/shopSlice';
import { useDispatch } from 'react-redux';

export default function useShopPage(categories) {
    const dispatch = useDispatch(); // Initialize Redux dispatch

    // States to manage pagination, filtering, sorting, and screen size
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(9);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [priceRange, setPriceRange] = useState({ minPrice: 0, maxPrice: Infinity });
    const [sortOrder, setSortOrder] = useState('default');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [isMobile, setIsMobile] = useState(false); // State to detect mobile view

    useEffect(() => {
        if (!categories || !Array.isArray(categories)) {
            console.error('Categories data is missing or invalid.'); // Handle missing or invalid categories
            return;
        }

        setIsMobile(window.innerWidth < 768); // Set initial mobile state

        const handleResize = () => {
            const wasMobile = isMobile;
            const isNowMobile = window.innerWidth < 768;
            setIsMobile(isNowMobile);

            if (wasMobile && !isNowMobile) {
                resetFilters(); // Reset filters when switching from mobile to desktop
            }
        };

        window.addEventListener('resize', handleResize); // Listen for window resize

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup on unmount
        };
    }, [isMobile, categories]);

    const resetFilters = () => {
        // Reset all filters and sort orders
        setSelectedCategories([]);
        setPriceRange({ minPrice: 0, maxPrice: Infinity });
        setSortOrder('default');
        setRowsPerPage(9);

        // Fetch products again after resetting filters
        if (categories && Array.isArray(categories)) {
            dispatch(fetchAllProducts(categories.map(category => category[0])))
                .unwrap()
                .catch(error => {
                    console.error('Error fetching all products during reset:', error);
                });
        }
    };

    useEffect(() => {
        // Fetch all products when categories are available
        if (categories && categories.length > 0) {
            dispatch(fetchAllProducts(categories.map(category => category[0])))
                .unwrap()
                .catch(error => {
                    console.error('Error fetching all products:', error);
                });
        }
    }, [dispatch, categories]);

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