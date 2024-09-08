'use client';

import React from 'react';

const ButtonComponent = ({ isAddedToCart, handleButtonClick }) => {
    return (
        <div
            className="absolute top-2 right-2"
            style={{ zIndex: 10 }} // Ensure button is above other content
            onClick={(e) => e.stopPropagation()} // Prevents parent click event
        >
            <button
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all transform hover:scale-110 ${isAddedToCart ? 'bg-primary' : 'bg-slate-50'
                    }`}
                onClick={handleButtonClick} // Handle add to cart toggle
            >
                <img
                    src={isAddedToCart ? "/icons/add-to-cart-white.svg" : "/icons/add-to-cart-black.svg"}
                    alt="Add to Cart"
                    className="w-5 h-5 transition-colors"
                    style={{ pointerEvents: 'none' }} // Disable click on image itself
                />
            </button>
        </div>
    );
};

export default ButtonComponent;