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
        <section
            className="relative flex items-center justify-center h-[300px] md:h-[450px] lg:h-[600px] bg-cover bg-center"
            style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: 'cover' }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 text-center text-white hero-content">
                <div className="hero-slogan">
                    <p className="text-base md:text-lg">Starting from: $49.99</p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        Exclusive collection for everyone
                    </h1>
                </div>
                <div className="mt-6 md:mt-8">
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