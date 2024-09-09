import React from 'react';
import { useRouter } from 'next/navigation';

const GoHomeButton = () => {
    const router = useRouter();

    // Function to navigate back to the home page
    const handleGoHome = () => {
        router.push('/');
    };

    return (
        <button
            onClick={handleGoHome}
            className="mt-8 bg-primary text-white py-3 px-6 rounded-lg"
        >
            Go to Home Page
        </button>
    );
};

export default GoHomeButton;