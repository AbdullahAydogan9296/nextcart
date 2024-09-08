'use client';

import React from 'react';

const ProductDetails = ({ title, price, rating }) => {
    return (
        <>
            {/* Product title */}
            <h2 className="text-lg font-semibold">{title}</h2>
            {/* Product price */}
            <p className="text-blue-500 text-lg font-semibold">{price} $</p>
            {/* Product rating */}
            <div className="flex items-center mt-2">
                <span className="text-yellow-500 mr-1">★</span>
                <span className="text-gray-600">{rating} Rating</span>
            </div>
        </>
    );
};

export default ProductDetails;