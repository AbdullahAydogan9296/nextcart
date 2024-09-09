'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ProductImage from './ProductImage';
import ButtonComponent from './ButtonComponent';
import ProductDetails from './ProductDetails';

const ProductCard = ({ product }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/shop/product/${product.id}`);
    };

    return (
        <div
            key={product.id}
            className="relative border p-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100"
            onClick={handleClick}
        >
            <ButtonComponent product={product} />

            <ProductImage thumbnail={product.thumbnail} title={product.title} />

            <ProductDetails title={product.title} price={product.price} rating={product.rating} />
        </div>
    );
};

export default ProductCard;