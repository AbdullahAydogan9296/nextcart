import React from 'react';

const SuccessMessage = () => (
    <div>
        <h1 className="text-2xl font-bold text-green-600 mb-4">
            Your order was placed successfully!
        </h1>
        <p className="text-lg text-gray-700">
            You can check your order details via your email.
        </p>
    </div>
);

export default SuccessMessage;