"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ErrorMessage from '@/components/LoginAndRegisterPage/ErrorMessage';

const ContactInfo = ({ validateContactInfo }) => {
    const [phoneNumber, setPhoneNumber] = useState(''); // State to store phone number
    const [email, setEmail] = useState(''); // State to store email address
    const [error, setError] = useState(''); // State to store error message
    const [isClient, setIsClient] = useState(false); // Track if component is rendered on the client side

    // Set client-side rendering state to true once the component is mounted
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Validate if the phone number has 11 digits and starts with '05'
    const validatePhoneNumber = (phone) => {
        return phone.length === 11 && phone.startsWith("05");
    };

    // Validate if the email format is correct
    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    // Validate the entire form (both phone number and email)
    const validateForm = () => {
        if (!phoneNumber || !email) {
            setError("Please fill out all fields.");
            validateContactInfo(false, "Please fill out all fields.");
            return false;
        }

        if (!validatePhoneNumber(phoneNumber)) {
            setError("Please enter a valid phone number.");
            validateContactInfo(false, "Please enter a valid phone number.");
            return false;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            validateContactInfo(false, "Please enter a valid email address.");
            return false;
        }

        setError('');
        validateContactInfo(true, '');
        return true;
    };

    // Handle input change and reset any existing error
    const handleInputChange = (setter) => (e) => {
        setError(''); // Clear error when user starts typing
        setter(e.target.value); // Update state
    };

    return (
        <div className="bg-white shadow-md p-6 rounded-lg mb-6">
            {/* Contact info header */}
            <div className="flex items-center mb-4">
                <Image
                    src="/icons/contact-info.svg"
                    alt="Contact Info Icon"
                    width={24}
                    height={24}
                    className="mr-2"
                />
                <h2 className="text-xl font-semibold">Contact Info</h2>
            </div>

            {/* Error message shown only on the client side */}
            {isClient && <ErrorMessage message={error} />}

            {/* Input fields for phone number and email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Your phone number</label>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={handleInputChange(setPhoneNumber)}
                        onBlur={validateForm} // Validate the form on input blur
                        placeholder="05XXXXXXXXX" // Placeholder for phone number
                        className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleInputChange(setEmail)}
                        onBlur={validateForm} // Validate the form on input blur
                        placeholder="name@example.com" // Placeholder for email
                        className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;