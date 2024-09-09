'use client';

import React from 'react';

const AddToCartButton = ({ isAddedToCart, handleButtonClick }) => {
    return (
        <button
            className={`flex items-center justify-center bg-primary text-white px-4 py-2 rounded-lg ${isAddedToCart ? 'bg-red-500' : 'bg-primary'}`}
            onClick={handleButtonClick}
        >
            <img
                src={isAddedToCart ? "/icons/add-to-cart-white.svg" : "/icons/add-to-cart-white.svg"}
                alt={isAddedToCart ? "Remove from Cart" : "Add to Cart"}
                width={20}
                height={20}
                className="mr-2"
            />
            {isAddedToCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
    );
};

export default AddToCartButton;