import React from 'react';
import HeroSection from '@/components/MainPage/HeroSection';
import BrandInfo from '@/components/MainPage/BrandInfo';
import CollectionsSection from '@/components/MainPage/Collections';
import BannerSection from '@/components/MainPage/Banner';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <HeroSection />

            {/* Brand Info */}
            <BrandInfo />

            {/* Collections Section */}
            <CollectionsSection />

            {/* Banner Section */}
            <BannerSection />
        </>
    );
}
