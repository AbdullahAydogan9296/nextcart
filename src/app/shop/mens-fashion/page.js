'use client';

import React from 'react';
import Page from '@/components/Shop/Page';
import useMensFashionPage from './hooks/useMensFashionPage';
import { fetchProductsByCategory } from '@/store/shopSlice';

const MensFashionPage = () => {
    return (
        <Page
            title="Shop Page"
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