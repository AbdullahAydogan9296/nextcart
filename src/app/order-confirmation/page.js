"use client";

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '@/store/cartSlice';
import SuccessIcon from '@/components/OrderConfirmationPage/SuccessIcon';
import SuccessMessage from '@/components/OrderConfirmationPage/SuccessMessage';
import GoHomeButton from '@/components/OrderConfirmationPage/GoHomeButton';

const OrderConfirmation = () => {
    const dispatch = useDispatch();

    // Clear the cart after the order is confirmed
    useEffect(() => {
        dispatch(clearCart());
    }, [dispatch]);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <SuccessIcon />
            <SuccessMessage />
            <GoHomeButton />
        </div>
    );
};

export default OrderConfirmation;