'use client';

import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '@/store/shopSlice';
import { useEffect, useState } from 'react';
import Loading from '@/components/LoadingPage/Loading';
import NoProductsFound from '@/components/ShopPage/ProductList/components/NoProductsFound';
import ProductImageSection from '@/components/ProductPage/ProductImageSection';
import ProductDetailsSection from '@/components/ProductPage/ProductDetailsSection';

const ProductPage = () => {
    const { id } = useParams(); // Get product ID from the URL
    const allProducts = useSelector(selectAllProducts); // Fetch all products from the Redux store
    const [product, setProduct] = useState(null); // State to hold the current product
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [selectedSize, setSelectedSize] = useState('S'); // Default selected size
    const [quantity, setQuantity] = useState(1); // Default quantity

    useEffect(() => {
        if (id && allProducts.length > 0) {
            const foundProduct = allProducts.find((prod) => prod.id === parseInt(id)); // Find product by ID
            if (foundProduct) {
                setProduct(foundProduct);
                setIsLoading(false); // Stop loading when product is found
            } else {
                fetchProductData(id); // Fetch from API if not found in store
            }
        } else if (id) {
            fetchProductData(id); // Fetch from API if no products in store
        }
    }, [id, allProducts]);

    const fetchProductData = async (productId) => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${productId}`);
            const productData = await response.json();
            if (productData && productData.id) {
                setProduct(productData); // Set product if fetched successfully
            } else {
                setProduct(null); // Handle invalid product
            }
        } catch (error) {
            console.error('Error fetching product data:', error);
            setProduct(null); // Handle fetch error
        } finally {
            setIsLoading(false); // Stop loading after fetch
        }
    };

    if (isLoading) {
        return <Loading />; // Show loading spinner while fetching data
    }

    if (!product) {
        return <NoProductsFound />; // Show "No Products Found" if no product is available
    }

    const incrementQuantity = () => setQuantity((prev) => prev + 1); // Increase quantity
    const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1)); // Decrease quantity

    return (
        <div className="container mx-auto p-4 mb-16">
            <div className="flex flex-col md:flex-row">
                {/* Product Image Section */}
                <ProductImageSection thumbnail={product.thumbnail} title={product.title} />

                {/* Product Details Section */}
                <ProductDetailsSection
                    product={product}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    quantity={quantity}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                />
            </div>
        </div>
    );
};

export default ProductPage;