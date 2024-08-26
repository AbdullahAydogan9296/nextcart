'use client';

import React from 'react';
import Page from '@/components/Shop/Page';
import useCosmeticsPage from './hooks/useCosmeticsPage';
import { fetchProductsByCategory } from '@/store/shopSlice';

const CosmeticsPage = () => {
    return (
        <Page
            title="Shop Page"
            useShopPageHook={useCosmeticsPage}
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

export default CosmeticsPage;