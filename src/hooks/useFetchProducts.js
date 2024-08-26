import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProducts = (category) => {
    // State to hold the fetched products
    const [products, setProducts] = useState([]);
    // State to manage loading status
    const [loading, setLoading] = useState(true);
    // State to store any error messages
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Selected category:", category);

        // Function to fetch products based on the selected category
        const fetchProducts = async () => {
            try {
                setLoading(true); // Start loading when fetching begins
                const response = await axios.get(`/api/products?category=${category}`);

                // Check if the response status is not OK (200)
                if (response.status !== 200) {
                    throw new Error(`Failed to fetch products for category: ${category}`);
                }

                // Update products state with the fetched data
                setProducts(response.data.products);
            } catch (error) {
                // Log and set error state if the request fails
                console.error('Error fetching products:', error);
                setError(error.response?.data?.message || 'An error occurred while fetching products');
            } finally {
                // Stop loading once the fetch is complete or fails
                setLoading(false);
            }
        };

        // Invoke the fetch function
        fetchProducts();
    }, [category]); // Dependency array to re-run effect when category changes

    // Return products, loading status, and error for use in components
    return { products, loading, error };
};

export default useFetchProducts;
