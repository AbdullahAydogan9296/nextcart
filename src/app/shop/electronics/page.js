'use client';

import React from 'react';
import Page from '@/components/ShopPage/Page';
import useElectronicsPage from '@/hooks/ShopPage/useElectronicsPage';
import { fetchProductsByCategory } from '@/store/shopSlice';

const ElectronicsPage = () => {
    return (
        <Page
            title="Electronics"
            useShopPageHook={useElectronicsPage}
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

export default ElectronicsPage;