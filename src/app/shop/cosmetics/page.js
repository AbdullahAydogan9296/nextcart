'use client';

import React from 'react';
import Page from '@/components/ShopPage/Page';
import useCosmeticsPage from '@/hooks/ShopPage/useCosmeticsPage';
import { fetchProductsByCategory } from '@/store/shopSlice';

const CosmeticsPage = () => {
    return (
        <Page
            title="Cosmetics"
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