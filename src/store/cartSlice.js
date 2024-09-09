import { createSlice } from '@reduxjs/toolkit';

// Initial state for the cart
const initialState = {
    items: [], // Array to hold items in the cart
};

// Cart slice for managing cart-related state
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Reducer to add an item to the cart
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id); // Check if the item is already in the cart
            if (existingItem) {
                existingItem.quantity += action.payload.quantity; // If the item exists, increase its quantity
            } else {
                state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 }); // Add new item with a default quantity of 1 if not specified
            }
        },
        // Reducer to remove an item from the cart by its ID
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload); // Remove the item with the specified ID
        },
        // Reducer to update the quantity of an item in the cart
        updateCartItemQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id); // Find the item to update
            if (item) {
                item.quantity = action.payload.quantity; // Update the item's quantity
            }
        },
        // Reducer to clear all items from the cart
        clearCart: (state) => {
            state.items = []; // Empty the cart
        },
    }
});

// Export actions for use in components
export const { addToCart, removeFromCart, updateCartItemQuantity, clearCart } = cartSlice.actions;

// Selector to get cart items from the state
export const selectCartItems = state => state.cart.items;

// Export the reducer to be used in the store
export default cartSlice.reducer;