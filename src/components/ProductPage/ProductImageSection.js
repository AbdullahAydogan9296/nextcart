'use client';

import React from 'react';
import Image from 'next/image';

const ProductImageSection = ({ thumbnail, title }) => {
    return (
        <div className="flex-1 p-2 rounded-lg overflow-hidden relative group mb-12">
            <Image
                src={thumbnail}
                alt={title}
                width={500}
                height={500}
                className="rounded-lg transform transition duration-300 ease-in-out group-hover:scale-110 cursor-zoom-in"
            />
        </div>
    );
};

export default ProductImageSection;