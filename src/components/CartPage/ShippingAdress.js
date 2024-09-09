"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ErrorMessage from '@/components/LoginAndRegisterPage/ErrorMessage';

const ShippingAddress = ({ validateShippingInfo }) => {
    // State variables for shipping address form inputs
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [stateProvince, setStateProvince] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [error, setError] = useState(''); // Error message for form validation
    const [isClient, setIsClient] = useState(false); // Ensure code runs on client-side

    // Set client-side flag after component mounts
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Validate postal code format (5 digits)
    const validatePostalCode = (code) => {
        return /^[0-9]{5}$/.test(code);
    };

    // Validate the entire shipping address form
    const validateForm = () => {
        if (!firstName || !lastName || !addressLine1 || !city || !country || !stateProvince || !postalCode) {
            setError('Please fill out all fields.');
            validateShippingInfo(false, 'Please fill out all fields.');
            return false;
        }

        // Validate postal code
        if (!validatePostalCode(postalCode)) {
            setError('Please enter a valid postal code.');
            validateShippingInfo(false, 'Please enter a valid postal code.');
            return false;
        }

        // Clear error and pass validation
        setError('');
        validateShippingInfo(true, '');
        return true;
    };

    // Handle input changes and reset error message
    const handleInputChange = (setter) => (e) => {
        setError('');
        setter(e.target.value);
    };

    return (
        <div className="bg-white shadow-md p-6 rounded-lg">
            <div className="flex items-center mb-4">
                <Image
                    src="/icons/shipping-adress.svg"
                    alt="Shipping Address Icon"
                    width={24}
                    height={24}
                    className="mr-2"
                />
                <h2 className="text-xl font-semibold">Shipping Address</h2>
            </div>
            {/* Show error message only when on client-side */}
            {isClient && <ErrorMessage message={error} />}

            {/* Shipping address form fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">First name</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={handleInputChange(setFirstName)}
                        onBlur={validateForm}
                        className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Last name</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={handleInputChange(setLastName)}
                        onBlur={validateForm}
                        className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Address line 1</label>
                    <input
                        type="text"
                        value={addressLine1}
                        onChange={handleInputChange(setAddressLine1)}
                        onBlur={validateForm}
                        className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Address line 2</label>
                    <input
                        type="text"
                        value={addressLine2}
                        onChange={handleInputChange(setAddressLine2)}
                        className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">City</label>
                    <input
                        type="text"
                        value={city}
                        onChange={handleInputChange(setCity)}
                        onBlur={validateForm}
                        className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Country</label>
                    <input
                        type="text"
                        value={country}
                        onChange={handleInputChange(setCountry)}
                        onBlur={validateForm}
                        className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">State/Province</label>
                    <input
                        type="text"
                        value={stateProvince}
                        onChange={handleInputChange(setStateProvince)}
                        onBlur={validateForm}
                        className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Postal code</label>
                    <input
                        type="text"
                        value={postalCode}
                        onChange={handleInputChange(setPostalCode)}
                        onBlur={validateForm}
                        placeholder="XXXXX"
                        className="mt-1 block w-full border-gray-500 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
        </div>
    );
};

export default ShippingAddress;