'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ProductImage from './ProductImage';
import ButtonComponent from './ButtonComponent';
import ProductDetails from './ProductDetails';

const ProductCard = ({ product }) => {
    const router = useRouter();
    const [isAddedToCart, setIsAddedToCart] = useState(false); // Tracks add-to-cart state

    // Navigates to the product detail page
    const handleClick = () => {
        router.push(`/shop/product/${product.id}`);
    };

    // Handles add to cart button click
    const handleButtonClick = (e) => {
        e.stopPropagation(); // Prevents parent click
        setIsAddedToCart(!isAddedToCart); // Toggles cart state
    };

    return (
        <div
            key={product.id}
            className="relative border p-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100"
            onClick={handleClick} // Click to navigate
        >
            {/* Add to cart button */}
            <ButtonComponent isAddedToCart={isAddedToCart} handleButtonClick={handleButtonClick} />

            {/* Product image */}
            <ProductImage thumbnail={product.thumbnail} title={product.title} />

            {/* Product details */}
            <ProductDetails title={product.title} price={product.price} rating={product.rating} />
        </div>
    );
};

export default ProductCard;