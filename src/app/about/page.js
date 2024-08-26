import React from 'react';
import ImageComponent from '@/components/About/ImageComponent';
import TextContent from '@/components/About/TextContent';

const AboutUs = () => {
    return (
        <section className="about-us py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">About us</h2>
                <p className="text-center text-gray-600 mb-12">
                    We not only help you design exceptional products, but also make it easy for you
                    to share your designs with more like-minded people.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side Image */}
                    <ImageComponent
                        src="/image1.svg"
                        alt="Couple smiling while shopping"
                    />

                    {/* Right Side Text */}
                    <TextContent
                        title="Provide fashionable and qualified products"
                        description="Already millions of people are very satisfied by this page builder and the number is growing more and more. Technology developing, requirements are increasing, Riode has brought."
                    />

                    {/* Second Row Text */}
                    <TextContent
                        title="Provide fashionable and qualified products"
                        description="Already millions of people are very satisfied by this page builder and the number is growing more and more. Technology developing, requirements are increasing, Riode has brought."
                    />

                    {/* Right Side Image */}
                    <ImageComponent
                        src="/image2.svg"
                        alt="Emporio Armani Store"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
