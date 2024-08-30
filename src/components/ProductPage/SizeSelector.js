'use client';

import React from 'react';

const SizeSelector = ({ selectedSize, setSelectedSize }) => {
    return (
        <div className="mb-12">
            <div className="flex space-x-2">
                {['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button
                        key={size}
                        className={`px-3 py-2 rounded-full ${selectedSize === size ? 'bg-primary text-white' : 'border border-transparent hover:border-gray-300'} transition duration-300`}
                        onClick={() => setSelectedSize(size)}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SizeSelector;