'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const CollectionsSection = () => {
    const router = useRouter();

    // Function to navigate to a specific page
    const navigateToPage = (path) => {
        router.push(path);
    };

    return (
        // Main section for displaying collections
        <section className="collections bg-white p-10 text-center">
            <h2 className="text-xl font-bold mb-6">Start exploring. Good things are waiting for you</h2>
            <div className="grid grid-cols-2 gap-4">

                {/* Men's Fashion Collection */}
                <div className="collection-item bg-blue-200 p-6 rounded-md">
                    <h3 className="text-lg font-bold">Men&apos;s Fashion</h3>
                    <p className="text-sm">Starting at $24</p>
                    <button
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={() => navigateToPage('/shop/mens-fashion')}
                    >
                        Shop now
                    </button>
                </div>

                {/* Women's Fashion Collection */}
                <div className="collection-item bg-purple-200 p-6 rounded-md">
                    <h3 className="text-lg font-bold">Women&apos;s Fashion</h3>
                    <p className="text-sm">Starting at $19</p>
                    <button
                        className="mt-4 bg-purple-500 text-white px-4 py-2 rounded"
                        onClick={() => navigateToPage('/shop/womens-fashion')}
                    >
                        Shop now
                    </button>
                </div>

                {/* Electronics Collection */}
                <div className="collection-item bg-orange-200 p-6 rounded-md">
                    <h3 className="text-lg font-bold">Electronics</h3>
                    <p className="text-sm">Explore electronics</p>
                    <button
                        className="mt-4 bg-orange-500 text-white px-4 py-2 rounded"
                        onClick={() => navigateToPage('/shop/electronics')}
                    >
                        Shop now
                    </button>
                </div>

                {/* Cosmetics Collection */}
                <div className="collection-item bg-green-200 p-6 rounded-md">
                    <h3 className="text-lg font-bold">Cosmetics</h3>
                    <p className="text-sm">Explore cosmetics</p>
                    <button
                        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
                        onClick={() => navigateToPage('/shop/cosmetics')}
                    >
                        Shop now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CollectionsSection;
