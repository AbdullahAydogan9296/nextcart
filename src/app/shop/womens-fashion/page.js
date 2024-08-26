'use client';

import React from 'react';
import Page from '@/components/Shop/Page';
import useWomensFashionPage from './hooks/useWomensFashionPage';
import { fetchProductsByCategory } from '@/store/shopSlice';

const WomensFashionPage = () => {
    return (
        <Page
            title="Shop Page"
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