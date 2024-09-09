'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import HeroSection from '@/components/MainPage/HeroSection';
import BrandInfo from '@/components/MainPage/BrandInfo';
import CollectionsSection from '@/components/MainPage/CollectionsSection';
import BannerSection from '@/components/MainPage/BannerSection';

export default function Home() {
    // Get the authentication state from Redux store
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

    return (
        <>
            <HeroSection /> {/* Hero section displaying main banner */}
            <BrandInfo /> {/* Section with brand information */}
            <CollectionsSection /> {/* Section displaying different collections */}
            <BannerSection /> {/* Additional promotional banners */}
        </>
    );
}