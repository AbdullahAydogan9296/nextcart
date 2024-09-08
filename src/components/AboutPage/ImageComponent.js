import React from 'react';

const ImageComponent = ({ src, alt }) => {
    return (
        <div className="about-image">
            <img src={src} alt={alt} className="rounded-lg shadow-md w-full h-auto" />
        </div>
    );
};

export default ImageComponent;
