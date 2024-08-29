import React from 'react';
import ProductCard from './components/ProductCard';
import NoProductsFound from './components/NoProductsFound';

// Component to display a list of products or a message if no products are found
const ProductList = ({ products }) => {
    // Check if there are no products or products array is empty
    if (!products || products.length === 0) {
        // Render NoProductsFound component if no products are available
        return <NoProductsFound />;
    }

    // Render the list of products using ProductCard component
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                // Render a ProductCard for each product in the products array
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
