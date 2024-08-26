'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const HeroBg = '/hero-bg.svg';

const HeroSection = () => {
    const router = useRouter();

    // Function to handle "Explore now" button click
    const handleExploreClick = () => {
        router.push('/shop'); // Navigate to the shop page
    };

    return (
        // Hero section with background image and overlay
        <section
            className="relative flex items-center justify-center h-[300px] md:h-[450px] lg:h-[600px] bg-cover bg-center"
            style={{ backgroundImage: `url(${HeroBg})` }}
        >
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content of the hero section */}
            <div className="relative z-10 text-center text-white hero-content">
                <div className="hero-slogan">
                    <p className="text-lg md:text-xl">Starting from: $49.99</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                        Exclusive collection for everyone
                    </h1>
                </div>
                <div className="mt-8 hero-button">
                    {/* Button that triggers navigation to the shop page */}
                    <button
                        className="px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-gray-800 transition"
                        onClick={handleExploreClick}
                    >
                        Explore now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
