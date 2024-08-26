"use client";

import React from 'react';

const FAQPage = () => {
    const faqs = [
        {
            question: "What is NextCart?",
            answer: "NextCart is an eCommerce platform that allows you to browse and purchase a wide range of products from various categories, including fashion, electronics, cosmetics, and more."
        },
        {
            question: "How do I create an account?",
            answer: "To create an account, click on the 'Sign Up' button at the top right corner of the homepage. Fill in your details and follow the instructions to complete your registration."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order is shipped, you will receive an email with a tracking number and a link to track your order. You can also log in to your account and check the order status under 'My Orders'."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and other secure payment methods. You can choose your preferred payment option during the checkout process."
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for most products. If you are not satisfied with your purchase, please contact our support team to initiate a return."
        },
        {
            question: "How do I contact customer support?",
            answer: "You can reach our customer support team via email at nextcart06@gmail.com or call us at 000-123-456-7890. We are available Monday to Friday from 9 AM to 6 PM."
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions (FAQ)</h1>
            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded shadow-md">
                        <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
                        <p className="text-gray-700">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQPage;
