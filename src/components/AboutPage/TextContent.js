import React from 'react';

const TextContent = ({ title, description }) => {
    return (
        <div className="about-content flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
        </div>
    );
};

export default TextContent;
