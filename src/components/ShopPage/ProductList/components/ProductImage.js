import React from 'react';
import Image from 'next/image';

const ProductImage = ({ thumbnail, title }) => {
    return (
        <div className="relative h-48 w-full mb-4">
            <Image
                src={thumbnail}
                alt={title}
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
            />
        </div>
    );
};

export default ProductImage;
