import React from 'react';
import ProductImage from './ProductImage';

const ProductCard = ({ product }) => {
    return (
        <div
            key={product.id}
            className="border p-4 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100"
        >
            <ProductImage thumbnail={product.thumbnail} title={product.title} />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-blue-500 text-lg font-semibold">{product.price} $</p>
        </div>
    );
};

export default ProductCard;
