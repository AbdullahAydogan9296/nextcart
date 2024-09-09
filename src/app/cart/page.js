"use client";

import React, { useState } from 'react';
import ContactInfo from '@/components/CartPage/ContactInfo';
import ShippingAddress from '@/components/CartPage/ShippingAdress';
import OrderSummary from '@/components/CartPage/OrderSummary';

const Cart = () => {
    // State to track if the contact info is valid
    const [isContactInfoValid, setIsContactInfoValid] = useState(false);

    // Error message for contact info validation
    const [contactInfoError, setContactInfoError] = useState('Please fill out all fields.');

    // State to track if the shipping info is valid
    const [isShippingInfoValid, setIsShippingInfoValid] = useState(false);

    // Error message for shipping info validation
    const [shippingInfoError, setShippingInfoError] = useState('Please fill out all fields.');

    // Function to validate the contact info and update the state
    const validateContactInfo = (isValid, errorMessage) => {
        setIsContactInfoValid(isValid);
        setContactInfoError(errorMessage);
    };

    // Function to validate the shipping info and update the state
    const validateShippingInfo = (isValid, errorMessage) => {
        setIsShippingInfoValid(isValid);
        setShippingInfoError(errorMessage);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Contact and shipping information sections */}
                <div className="w-full lg:w-2/3">
                    <ContactInfo validateContactInfo={validateContactInfo} />
                    <ShippingAddress validateShippingInfo={validateShippingInfo} />
                </div>

                {/* Order summary section */}
                <div className="w-full lg:w-2/5">
                    <OrderSummary
                        isContactInfoValid={isContactInfoValid}
                        contactInfoError={contactInfoError}
                        isShippingInfoValid={isShippingInfoValid}
                        shippingInfoError={shippingInfoError}
                    />
                </div>
            </div>
        </div>
    );
};

export default Cart;