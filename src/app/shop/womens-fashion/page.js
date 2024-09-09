'use client';

import React from 'react';
import Page from '@/components/ShopPage/Page';
import useWomensFashionPage from '@/hooks/ShopPage/useWomensFashionPage';
import { fetchProductsByCategory } from '@/store/shopSlice';

const WomensFashionPage = () => {
    return (
        <Page
            title="Women&apos;s Fashion"
            useShopPageHook={useWomensFashionPage}
            fetchProductsByCategory={(categories) => {
                if (categories && categories.length > 0) {
                    return fetchProductsByCategory(categories);
                } else {
                    return [];
                }
            }}
        />
    );
};

export default WomensFashionPage;