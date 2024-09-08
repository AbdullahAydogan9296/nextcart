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
import { selectFilteredProducts, selectStatus, selectError } from '@/store/shopSlice';

const Page = ({
    title,
    useShopPageHook,
    fetchProductsByCategory,
}) => {
    const {
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
    } = useShopPageHook();

    const status = useSelector(selectStatus);
    const error = useSelector(selectError);

    // Function to handle category selection
    const onSelectCategory = (selectedCategories) => {
        if (!categories || !Array.isArray(categories) || selectedCategories.length === 0) {
            console.error('Categories data is missing, invalid, or no category selected.');
            return;
        }

        setSelectedCategories(selectedCategories);
        dispatch(fetchProductsByCategory(selectedCategories))
            .unwrap()
            .then(() => {
                setCurrentPage(1); // Reset pagination on category change
            })
            .catch(err => {
                console.error('Failed to fetch products by category:', err);
            });
    };

    // Function to handle price range changes
    const onPriceRangeChange = ({ minPrice, maxPrice }) => {
        setPriceRange({ minPrice, maxPrice });
    };

    // Function to handle sort order changes
    const onSortChange = (order) => {
        setSortOrder(order);
    };

    // Calculate total pages based on filtered products
    const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);
    const { pageNumbers, hasNextPage, hasPrevPage } = usePagination(totalPages, currentPage);

    // Fetch products by categories when the component mounts
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

    // Show loading component while fetching data
    if (status === 'loading') {
        return <Loading />;
    }

    // Show error message if fetching data fails
    if (status === 'failed') {
        return <div>Error: {error || "Failed to load products. Please try again."}</div>;
    }

    // Show error if no categories are available
    if (categories.length === 0) {
        return <div>Error: No categories provided</div>;
    }

    // Slice filtered products for pagination
    const displayedProducts = filteredProducts.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <div className="flex">
                {/* Sidebar for filters */}
                <Sidebar
                    categories={categories}
                    onSelectCategory={onSelectCategory}
                    onPriceRangeChange={onPriceRangeChange}
                    onSortChange={onSortChange}
                    className="sidebar-container"
                />

                <div className="flex-grow p-4">
                    {/* Mobile filters */}
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

                    {/* Product list */}
                    <ProductList products={displayedProducts} />

                    {/* Pagination controls */}
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