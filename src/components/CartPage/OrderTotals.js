"use client";

import React from 'react';

const OrderTotals = ({ calculateTotal }) => {
    return (
        <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
                <p>Subtotal</p>
                <p>{calculateTotal()} $</p>
            </div>
            <div className="flex justify-between mb-2">
                <p>Shipping estimate</p>
                <p>$0</p>
            </div>
            <div className="flex justify-between mb-2">
                <p>Tax estimate</p>
                <p>$3.99</p>
            </div>
            <div className="flex justify-between font-bold text-lg">
                <p>Order total</p>
                <p>{(parseFloat(calculateTotal()) + 3.99).toFixed(2)} $</p>
            </div>
        </div>
    );
};

export default OrderTotals;