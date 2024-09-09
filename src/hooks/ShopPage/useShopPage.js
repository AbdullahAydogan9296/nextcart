import { useState, useEffect } from 'react';
import { fetchAllProducts, selectAllProducts, selectCartItems } from '@/store/shopSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function useShopPage(categories) {
    const dispatch = useDispatch();
    const allProducts = useSelector(selectAllProducts); // All available products from the store
    const cartItems = useSelector(selectCartItems); // Cart items from the store

    // States for pagination, filtering, sorting, and mobile view detection
    const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
    const [rowsPerPage, setRowsPerPage] = useState(9); // Number of products per page
    const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products based on filters
    const [priceRange, setPriceRange] = useState({ minPrice: 0, maxPrice: Infinity }); // Price range filter
    const [sortOrder, setSortOrder] = useState('default'); // Sort order for products
    const [selectedCategories, setSelectedCategories] = useState([]); // Selected categories for filtering
    const [isMobile, setIsMobile] = useState(false); // Flag for detecting mobile view

    // Effect to handle screen resizing and mobile view detection
    useEffect(() => {
        if (!categories || !Array.isArray(categories)) {
            console.error('Categories data is missing or invalid.');
            return;
        }

        setIsMobile(window.innerWidth < 768); // Set mobile view based on screen width

        const handleResize = () => {
            const wasMobile = isMobile;
            const isNowMobile = window.innerWidth < 768;
            setIsMobile(isNowMobile);

            // Reset filters when switching from mobile to desktop
            if (wasMobile && !isNowMobile) {
                resetFilters();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile, categories]);

    // Function to reset filters to their default values
    const resetFilters = () => {
        setSelectedCategories([]);
        setPriceRange({ minPrice: 0, maxPrice: Infinity });
        setSortOrder('default');
        setRowsPerPage(9);

        // Fetch all products after resetting filters
        if (categories && Array.isArray(categories)) {
            dispatch(fetchAllProducts(categories.map(category => category[0])))
                .unwrap()
                .catch(error => {
                    console.error('Error fetching all products during reset:', error);
                });
        }
    };

    // Fetch all products when categories change
    useEffect(() => {
        if (categories && categories.length > 0) {
            dispatch(fetchAllProducts(categories.map(category => category[0])))
                .unwrap()
                .catch(error => {
                    console.error('Error fetching all products:', error);
                });
        }
    }, [dispatch, categories]);

    // Effect to filter and sort products based on price range, sort order, and cart status
    useEffect(() => {
        if (!allProducts || !Array.isArray(allProducts)) {
            console.error('All products data is missing or invalid.');
            return;
        }

        // Filter products by price range
        let filtered = allProducts.filter(
            (product) =>
                product.price >= priceRange.minPrice &&
                product.price <= priceRange.maxPrice
        );

        // Sort products based on the selected sort order
        if (sortOrder === 'priceLowHigh') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'priceHighLow') {
            filtered.sort((a, b) => b.price - a.price);
        }

        // Check if products are in the cart and mark them accordingly
        filtered = filtered.map((product) => {
            const isInCart = cartItems.some(cartItem => cartItem.id === product.id);
            return { ...product, isInCart };
        });

        // Update the filtered products state
        setFilteredProducts(filtered);

        console.log("Filtered Products after applying price range, sort, and cart status:", filtered);
    }, [allProducts, priceRange, sortOrder, setFilteredProducts, cartItems]);

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