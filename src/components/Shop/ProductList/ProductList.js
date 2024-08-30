import React from 'react';
import ProductCard from './components/ProductCard';
import NoProductsFound from './components/NoProductsFound';

const ProductList = ({ products }) => {
    // Check if products array is empty or undefined
    if (!products || products.length === 0) {
        return <NoProductsFound />; // Show NoProductsFound component if no products
    }

    return (
        // Render product grid
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                // Render a ProductCard for each product
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;