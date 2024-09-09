'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItems } from '@/store/cartSlice';

const ButtonComponent = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const isAddedToCart = cartItems.some(item => item.id === product.id);

    const handleButtonClick = () => {
        if (isAddedToCart) {
            dispatch(removeFromCart(product.id));
        } else {
            dispatch(addToCart({ ...product, quantity: 1 }));
        }
    };

    return (
        <div
            className="absolute top-2 right-2"
            style={{ zIndex: 10 }}
            onClick={(e) => e.stopPropagation()}
        >
            <button
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all transform hover:scale-110 ${isAddedToCart ? 'bg-primary' : 'bg-slate-50'}`}
                onClick={handleButtonClick}
            >
                <img
                    src={isAddedToCart ? "/icons/add-to-cart-white.svg" : "/icons/add-to-cart-black.svg"}
                    alt={isAddedToCart ? "Remove from Cart" : "Add to Cart"}
                    className="w-5 h-5 transition-colors"
                    style={{ pointerEvents: 'none' }}
                />
            </button>
        </div>
    );
};

export default ButtonComponent;