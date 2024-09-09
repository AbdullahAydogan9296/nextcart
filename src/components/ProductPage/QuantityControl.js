'use client';

import React from 'react';

const QuantityControl = ({ quantity, incrementQuantity, decrementQuantity }) => {
    return (
        <div className="flex items-center space-x-2">
            <button onClick={decrementQuantity} className="px-2 py-1 border rounded-l hover:bg-gray-200">-</button>
            <span className="px-4">{quantity}</span>
            <button onClick={incrementQuantity} className="px-2 py-1 border rounded-r hover:bg-gray-200">+</button>
        </div>
    );
};

export default QuantityControl;