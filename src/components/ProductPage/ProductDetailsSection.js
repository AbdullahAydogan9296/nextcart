'use client';

import React from 'react';
import SizeSelector from './SizeSelector';
import QuantityControl from './QuantityControl';
import PriceSummary from './PriceSummary';
import ProductDescription from './ProductDescription';

const ProductDetailsSection = ({ product, selectedSize, setSelectedSize, quantity, incrementQuantity, decrementQuantity }) => {
    return (
        <div className="flex-1 ml-4">
            {/* Product title and price details */}
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-2xl text-gray-900 font-semibold mb-2">{product.price} $</p>
            <p className="text-sm text-gray-600 mb-2">Tax included</p>

            {/* Product rating */}
            <div className="flex items-center mb-12">
                <span className="text-yellow-500 mr-2">★</span>
                <span className="text-black">{product.rating} Rating</span>
            </div>

            {/* Size selection component */}
            <SizeSelector selectedSize={selectedSize} setSelectedSize={setSelectedSize} />

            {/* Quantity control component */}
            <QuantityControl quantity={quantity} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} />

            {/* Price summary component */}
            <PriceSummary product={product} quantity={quantity} />

            {/* Product description component */}
            <ProductDescription description={product.description} />
        </div>
    );
};

export default ProductDetailsSection;