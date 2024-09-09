import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SizeSelector from './SizeSelector';
import QuantityControl from './QuantityControl';
import AddToCartButton from './AddToCartButton';
import PriceSummary from './PriceSummary';
import ProductDescription from './ProductDescription';
import { addToCart, removeFromCart, selectCartItems } from '@/store/cartSlice';

const ProductDetailsSection = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    // State for quantity and selected size (default size is 'S')
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('S');

    // Check if the product is already in the cart
    const isAddedToCart = cartItems.some(item => item.id === product.id);

    // Handle add or remove from cart functionality
    const handleAddOrRemoveFromCart = () => {
        if (isAddedToCart) {
            dispatch(removeFromCart(product.id)); // Remove product if already in cart
        } else {
            dispatch(addToCart({ ...product, quantity, selectedSize })); // Add product with selected size and quantity
        }
    };

    // Functions to increment and decrement quantity
    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="flex-1 ml-4">
            {/* Product title and price */}
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-2xl text-gray-900 font-semibold mb-2">{product.price} $</p>

            {/* Product rating */}
            <div className="flex items-center mb-12">
                <span className="text-yellow-500 mr-2">★</span>
                <span className="text-black">{product.rating} Rating</span>
            </div>

            {/* Size selector component */}
            <SizeSelector selectedSize={selectedSize} setSelectedSize={setSelectedSize} />

            {/* Quantity control and add to cart button */}
            <div className="flex items-center justify-between space-x-4 mb-8">
                <QuantityControl
                    quantity={quantity}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                />
                <AddToCartButton
                    isAddedToCart={isAddedToCart}
                    handleButtonClick={handleAddOrRemoveFromCart}
                />
            </div>

            {/* Price summary and product description */}
            <PriceSummary product={product} quantity={quantity} />
            <ProductDescription description={product.description} />
        </div>
    );
};

export default ProductDetailsSection;