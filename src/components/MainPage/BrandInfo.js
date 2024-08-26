import React from 'react';

// Paths to the icon assets
const FreeShippingIcon = '/icons/free-shipping.svg';
const EasyReturnIcon = '/icons/easy-return.svg';
const WorldwideDeliveryIcon = '/icons/worldwide-delivery.svg';
const RefundsPolicyIcon = '/icons/refunds-policy.svg';

const BrandInfo = () => {
    return (
        // Section displaying brand information and benefits
        <section className="brand-info grid grid-cols-2 md:grid-cols-4 gap-4 p-6 text-center bg-white shadow-md rounded-md">

            {/* Free Shipping Info */}
            <div className="info-item flex flex-col items-center">
                <img src={FreeShippingIcon} alt="Free shipping icon" className="w-6 h-6 mb-2" />
                <p className="font-semibold">Free shipping</p>
                <p className="text-xs">On orders over $50.00</p>
            </div>

            {/* Easy Return Info */}
            <div className="info-item flex flex-col items-center">
                <img src={EasyReturnIcon} alt="Very easy to return icon" className="w-6 h-6 mb-2" />
                <p className="font-semibold">Very easy to return</p>
                <p className="text-xs">Just phone number</p>
            </div>

            {/* Worldwide Delivery Info */}
            <div className="info-item flex flex-col items-center">
                <img src={WorldwideDeliveryIcon} alt="Worldwide delivery icon" className="w-6 h-6 mb-2" />
                <p className="font-semibold">Worldwide delivery</p>
                <p className="text-xs">Fast delivery worldwide</p>
            </div>

            {/* Refunds Policy Info */}
            <div className="info-item flex flex-col items-center">
                <img src={RefundsPolicyIcon} alt="Refunds policy icon" className="w-6 h-6 mb-2" />
                <p className="font-semibold">Refunds policy</p>
                <p className="text-xs">60 days return for any reason</p>
            </div>
        </section>
    );
};

export default BrandInfo;
