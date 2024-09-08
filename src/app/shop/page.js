'use client';

import React from 'react';
import Page from '@/components/ShopPage/Page';
import useMainShopPage from '@/hooks/ShopPage/useMainShopPage';
import { fetchAllProducts } from '@/store/shopSlice';

const ShopPage = () => {
    return (
        <Page
            title="Shop Page"
            useShopPageHook={useMainShopPage}
            fetchProductsByCategory={(categories) => {
                if (categories && categories.length > 0) {
                    return fetchAllProducts(categories);
                } else {
                    return [];
                }
            }}
        />
    );
};

export default ShopPage;