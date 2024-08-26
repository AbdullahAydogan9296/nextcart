import React from 'react';
import ContactInfo from '@/components/Contact/ContactInfo';
import AdditionalInfo from '@/components/Contact/AdditionalInfo';

const ContactPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Get in touch with us</h1>
            <div className="flex flex-col md:flex-row justify-between">
                <ContactInfo />
                <AdditionalInfo />
            </div>

            {/* Add some spacing at the bottom before the footer */}
            <div className="mt-16"></div>
        </div>
    );
};

export default ContactPage;
