import React from 'react';

const ContactInfo = () => {
    return (
        <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Address</h2>
            <p className="mb-4">NextCart, 1234 Street Name, Gotham City, USA.</p>

            <h2 className="text-xl font-semibold mb-4">Email</h2>
            <p className="mb-4">nextcart06@gmail.com</p>

            <h2 className="text-xl font-semibold mb-4">Phone</h2>
            <p className="mb-4">000-123-456-7890</p>
        </div>
    );
};

export default ContactInfo;
