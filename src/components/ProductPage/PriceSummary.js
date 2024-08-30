'use client';

import React from 'react';

const PriceSummary = ({ product, quantity }) => {
    return (
        <div className="mt-12 mb-12 border-t pt-4">
            <p className="flex justify-between"><span>{product.price} $ x {quantity}</span><span>{(product.price * quantity).toFixed(2)} $</span></p>
            <p className="flex justify-between"><span>Tax estimate</span><span>$0</span></p>
            <p className="flex justify-between font-semibold"><span>Total</span><span>{(product.price * quantity).toFixed(2)} $</span></p>
        </div>
    );
};

export default PriceSummary;