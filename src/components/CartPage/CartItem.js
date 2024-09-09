"use client";

import React from 'react';
import QuantityControl from '@/components/ProductPage/QuantityControl';
import Image from 'next/image';

const CartItem = ({ item, handleQuantityChange, handleRemoveFromCart }) => {
    return (
        <div key={item.id} className="flex justify-between items-start mb-4">
            {/* Display product thumbnail and title */}
            <div className="flex items-start">
                <img src={item.thumbnail} alt={item.title} className="w-20 h-20 mr-4" />
                <div>
                    <p>{item.title}</p>
                    {/* Component to control the quantity of the item */}
                    <QuantityControl
                        quantity={item.quantity}
                        incrementQuantity={() => handleQuantityChange(item, item.quantity + 1)} // Increment quantity
                        decrementQuantity={() => handleQuantityChange(item, item.quantity - 1)} // Decrement quantity
                    />
                </div>
            </div>
            <div className="flex flex-col items-end">
                {/* Display total price based on quantity */}
                <p className="text-right">{(item.price * item.quantity).toFixed(2)} $</p>
                {/* Button to remove the item from the cart */}
                <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="mt-2"
                >
                    <Image
                        src="/icons/bin.svg"
                        alt="Remove"
                        width={30}
                        height={30}
                    />
                </button>
            </div>
        </div>
    );
};

export default CartItem;