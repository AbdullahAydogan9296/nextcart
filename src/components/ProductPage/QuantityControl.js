'use client';

import React from 'react';

const QuantityControl = ({ quantity, incrementQuantity, decrementQuantity }) => {
    return (
        <div className="flex justify-evenly items-center mb-12 space-x-6 lg:justify-between md:justify-evenly">
            <div className="flex items-center">
                <button onClick={decrementQuantity} className="px-2 py-1 border rounded-l hover:bg-gray-200">-</button>
                <span className="px-4">{quantity}</span>
                <button onClick={incrementQuantity} className="px-2 py-1 border rounded-r hover:bg-gray-200">+</button>
            </div>
            <button className="flex items-center justify-center bg-primary text-white px-4 py-2 rounded-lg">
                <img src="/icons/add-to-cart-white.svg" alt="Add to Cart" width={20} height={20} className="mr-2" />
                Add to Cart
            </button>
        </div>
    );
};

export default QuantityControl;