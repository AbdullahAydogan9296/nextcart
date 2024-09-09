"use client";

import React from 'react';

const ConfirmOrderButton = ({ handleConfirmOrder }) => {
    return (
        <button
            className="bg-primary text-white w-full py-3 mt-6 rounded-lg"
            onClick={handleConfirmOrder}
        >
            Confirm order
        </button>
    );
};

export default ConfirmOrderButton;