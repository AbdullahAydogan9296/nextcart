'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const BannerSection = () => {
    const router = useRouter();

    // Function to handle button click and navigate to the Shop page
    const handleShopNowClick = () => {
        router.push('/shop');
    };

    return (
        // Banner section with promotional content
        <section className="banner flex items-center justify-center bg-gray-100 p-10 rounded-lg overflow-hidden">
            <div className="flex items-center max-w-7xl mx-auto">
                {/* Promotional text and button */}
                <div className="bg-white p-8 shadow-md rounded-lg max-w-md">
                    <p className="text-gray-500 font-medium mb-2">100% Original Products</p>
                    <h2 className="text-2xl font-bold mb-2">The All New Fashion Collection Items</h2>
                    <p className="mb-4">Starting from: $59.99</p>
                    <button
                        className="bg-black text-white px-6 py-3 rounded-md"
                        onClick={handleShopNowClick}
                    >
                        Shop now
                    </button>
                </div>
                {/* Background image shown only on larger screens */}
                <div className="ml-8 hidden md:block">
                    <img src="/banner-bg.svg" alt="Fashion Collection" className="rounded-lg w-full h-auto" />
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
