"use client";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, updateCartItemQuantity, removeFromCart } from '@/store/cartSlice';
import CartItem from './CartItem';
import OrderTotals from './OrderTotals';
import ConfirmOrderButton from './ConfirmOrderButton';
import { useRouter } from 'next/navigation';

const OrderSummary = ({
    isContactInfoValid,
    contactInfoError,
    isShippingInfoValid,
    shippingInfoError,
}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems); // Get cart items from Redux store
    const router = useRouter();

    // Handle changes in quantity for a specific cart item
    const handleQuantityChange = (item, newQuantity) => {
        if (newQuantity >= 1) {
            dispatch(updateCartItemQuantity({ id: item.id, quantity: newQuantity }));
        }
    };

    // Remove an item from the cart
    const handleRemoveFromCart = (itemId) => {
        dispatch(removeFromCart(itemId));
    };

    // Calculate the total price for all items in the cart
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            if (!item.price || !item.quantity) {
                return total;
            }
            return total + (item.price * item.quantity);
        }, 0).toFixed(2);
    };

    // Handle the order confirmation
    const handleConfirmOrder = () => {
        if (!isContactInfoValid || !isShippingInfoValid) {
            return;
        }
        router.push('/order-confirmation');
    };

    return (
        <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Order summary</h2>

            {/* If there are items in the cart, display them */}
            {cartItems.length > 0 ? (
                <>
                    {cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            handleQuantityChange={handleQuantityChange}
                            handleRemoveFromCart={handleRemoveFromCart}
                        />
                    ))}

                    {/* Order totals */}
                    <OrderTotals calculateTotal={calculateTotal} />

                    {/* Button to confirm the order */}
                    <ConfirmOrderButton handleConfirmOrder={handleConfirmOrder} />
                </>
            ) : (
                <p>No items in your cart</p>
            )}
        </div>
    );
};

export default OrderSummary;