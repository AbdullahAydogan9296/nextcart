import React from 'react';

const NoProductsFound = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center text-gray-500 text-3xl">
                Sorry, we couldn't find any products that match your filters.
            </div>
        </div>
    );
};

export default NoProductsFound;
