'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar/Sidebar';
import ProductList from './ProductList/ProductList';
import MobileFilters from './MobileFilters/MobileFilters';
import Pagination from './Pagination/Pagination';
import usePagination from './Pagination/hooks/usePagination';
import Loading from '@/components/Loading/Loading';
import { selectAllProducts, selectFilteredProducts, selectStatus, selectError } from '@/store/shopSlice';

const Page = ({
    title,
    useShopPageHook,
    fetchProductsByCategory,
}) => {
    // Destructuring state and functions from custom hook
    const {
        dispatch,
        categories,
        currentPage,
        setCurrentPage,
        rowsPerPage,
        setRowsPerPage,
        setFilteredProducts,
        priceRange,
        setPriceRange,
        sortOrder,
        setSortOrder,
        selectedCategories,
        setSelectedCategories,
        isMobile,
        resetFilters
    } = useShopPageHook();

    // Accessing the product state from Redux store
    const allProducts = useSelector(selectAllProducts);
    const filteredProducts = useSelector(selectFilteredProducts); // Use filtered products from Redux store
    const status = useSelector(selectStatus);
    const error = useSelector(selectError);

    // Handle category selection
    const onSelectCategory = (selectedCategories) => {
        if (!categories || !Array.isArray(categories) || selectedCategories.length === 0) {
            console.error('Categories data is missing, invalid, or no category selected.');
            return;
        }

        setSelectedCategories(selectedCategories);
        dispatch(fetchProductsByCategory(selectedCategories))
            .unwrap()
            .then(() => {
                // Reset pagination to the first page after category change
                setCurrentPage(1);
            })
            .catch(err => {
                console.error('Failed to fetch products by category:', err);
            });
    };

    // Handle price range filter change
    const onPriceRangeChange = ({ minPrice, maxPrice }) => {
        setPriceRange({ minPrice, maxPrice });
    };

    // Handle sort order change
    const onSortChange = (order) => {
        setSortOrder(order);
    };

    // Calculate total pages based on filtered products
    const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);
    const { pageNumbers, hasNextPage, hasPrevPage } = usePagination(totalPages, currentPage);

    // Filter products based on price range and sort order
    useEffect(() => {
        let filtered = allProducts.filter(
            (product) =>
                product.price >= priceRange.minPrice &&
                product.price <= priceRange.maxPrice
        );

        if (sortOrder === 'priceLowHigh') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'priceHighLow') {
            filtered.sort((a, b) => b.price - a.price);
        }

        setFilteredProducts(filtered);
    }, [allProducts, priceRange, sortOrder]);

    // Fetch products when categories change
    useEffect(() => {
        if (categories.length === 0) {
            console.error('No categories provided.');
            return;
        }
        dispatch(fetchProductsByCategory(categories.map(category => category[0])))
            .unwrap()
            .catch(err => {
                console.error('Error fetching products:', err);
            });
    }, [dispatch, categories]);

    // Display loading state
    if (status === 'loading') {
        return <Loading />;
    }

    // Display error state
    if (status === 'failed') {
        return <div>Error: {error || "Failed to load products. Please try again."}</div>;
    }

    // Check if categories are provided
    if (categories.length === 0) {
        return <div>Error: No categories provided</div>;
    }

    // Determine products to display based on pagination
    const displayedProducts = filteredProducts.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    return (
        <>
            {/* Page head component for SEO */}
            <Head>
                <title>{title}</title>
            </Head>

            {/* Main layout for the shop page */}
            <div className="flex">
                {/* Sidebar for category, price, and sort filters */}
                <Sidebar
                    categories={categories}
                    onSelectCategory={onSelectCategory}
                    onPriceRangeChange={onPriceRangeChange}
                    onSortChange={onSortChange}
                    className="sidebar-container"
                />

                {/* Main content area */}
                <div className="flex-grow p-4">
                    {/* Mobile filters displayed only on small screens */}
                    {isMobile && (
                        <MobileFilters
                            rowsPerPage={rowsPerPage}
                            setRowsPerPage={setRowsPerPage}
                            categories={categories}
                            onSelectCategory={onSelectCategory}
                            onPriceRangeChange={onPriceRangeChange}
                            onSortChange={onSortChange}
                        />
                    )}

                    {/* Product list component */}
                    <ProductList products={displayedProducts} />

                    {/* Pagination component */}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </>
    );
};

export default Page;
