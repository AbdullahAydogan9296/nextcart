'use client';

import React from 'react';
import Page from '@/components/ShopPage/Page';
import useMensFashionPage from '@/hooks/ShopPage/useMensFashionPage';
import { fetchProductsByCategory } from '@/store/shopSlice';

const MensFashionPage = () => {
    return (
        <Page
            title="Men&apos;s Fashion"
            useShopPageHook={useMensFashionPage}
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

export default MensFashionPage;