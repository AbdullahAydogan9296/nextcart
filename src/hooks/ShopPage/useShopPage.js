import { useState, useEffect } from 'react';
import { fetchAllProducts, selectAllProducts } from '@/store/shopSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function useShopPage(categories) {
    const dispatch = useDispatch();
    const allProducts = useSelector(selectAllProducts);

    // States to handle pagination, filtering, sorting, and mobile view detection
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(9);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [priceRange, setPriceRange] = useState({ minPrice: 0, maxPrice: Infinity });
    const [sortOrder, setSortOrder] = useState('default');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    // Effect to detect screen resize and update mobile view state
    useEffect(() => {
        if (!categories || !Array.isArray(categories)) {
            console.error('Categories data is missing or invalid.');
            return;
        }

        setIsMobile(window.innerWidth < 768); // Check if mobile view

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

    // Function to reset all filters and fetch all products
    const resetFilters = () => {
        setSelectedCategories([]);
        setPriceRange({ minPrice: 0, maxPrice: Infinity });
        setSortOrder('default');
        setRowsPerPage(9);

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

    // Effect to filter products by price range and sort order
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

        // Sort products based on the selected order
        if (sortOrder === 'priceLowHigh') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'priceHighLow') {
            filtered.sort((a, b) => b.price - a.price);
        }

        setFilteredProducts(filtered);

        console.log("Filtered Products after applying price range and sort:", filtered);
    }, [allProducts, priceRange, sortOrder, setFilteredProducts]);

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