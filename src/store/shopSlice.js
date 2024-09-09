import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Helper function to perform fetch with retry mechanism
const fetchWithRetry = async (url, options = {}, retries = 3) => {
    try {
        const response = await fetch(url, options);
        // Retry if response is not OK
        if (!response.ok) {
            if (retries > 0) {
                console.warn(`Retrying... (${3 - retries + 1})`);
                return await fetchWithRetry(url, options, retries - 1);
            } else {
                throw new Error(`Failed after 3 retries: ${response.statusText}`);
            }
        }
        return response;
    } catch (error) {
        // Retry in case of error, unless retries are exhausted
        if (retries > 0) {
            console.warn(`Retrying... (${3 - retries + 1})`);
            return await fetchWithRetry(url, options, retries - 1);
        } else {
            throw error;
        }
    }
};

// Async thunk to fetch products by category
export const fetchProductsByCategory = createAsyncThunk(
    'shop/fetchProductsByCategory',
    async (categories, { rejectWithValue }) => {
        try {
            // Check if valid categories array is provided
            if (!categories || !Array.isArray(categories) || categories.length === 0) {
                throw new Error('No categories provided');
            }
            // Fetch products for each category
            const allProducts = await Promise.all(
                categories.map(async (category) => {
                    const response = await fetchWithRetry(`https://dummyjson.com/products/category/${category}`);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch products for category: ${category}`);
                    }
                    const data = await response.json();
                    return data.products;
                })
            );
            return allProducts.flat(); // Combine all fetched products into a single array
        } catch (error) {
            console.error('Error fetching products by category:', error);
            return rejectWithValue(error.message || 'An unknown error occurred while fetching products');
        }
    }
);

// Async thunk to fetch all products
export const fetchAllProducts = createAsyncThunk(
    'shop/fetchAllProducts',
    async (categories, { rejectWithValue }) => {
        try {
            // Check if valid categories array is provided
            if (!categories || !Array.isArray(categories) || categories.length === 0) {
                throw new Error('No categories provided');
            }
            // Fetch products for each category
            const allProducts = await Promise.all(
                categories.map(async (category) => {
                    const response = await fetchWithRetry(`https://dummyjson.com/products/category/${category}`);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch products for category: ${category}`);
                    }
                    const data = await response.json();
                    return data.products;
                })
            );
            return allProducts.flat(); // Combine all fetched products into a single array
        } catch (error) {
            console.error('Error fetching all products:', error);
            return rejectWithValue(error.message || 'An unknown error occurred while fetching products');
        }
    }
);

// Redux slice for managing the shop state
const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        products: [], // Array to hold all products
        filteredProducts: [], // Array to hold filtered products
        status: 'idle', // Tracks loading status
        error: null, // Holds error messages if any
        cart: [] // Holds items added to the cart
    },
    reducers: {
        // Reducer to filter products based on search term
        searchProducts: (state, action) => {
            state.filteredProducts = state.products.filter((product) =>
                product.title.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
        // Reducer to clear the cart
        clearCart: (state) => {
            state.cart = [];
        },
        // Reducer to add an item to the cart
        addToCart: (state, action) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity; // Update quantity if item already exists
            } else {
                state.cart.push({ ...action.payload, quantity: action.payload.quantity || 1 }); // Add new item
            }
        },
        // Reducer to remove an item from the cart by ID
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload); // Remove item by ID
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsByCategory.pending, (state) => {
                state.status = 'loading'; // Set status to loading while fetching
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.status = 'succeeded'; // Set status to succeeded once data is fetched
                state.products = action.payload; // Store fetched products
                state.filteredProducts = action.payload; // Initialize filtered products
            })
            .addCase(fetchProductsByCategory.rejected, (state, action) => {
                state.status = 'failed'; // Set status to failed if there's an error
                state.error = action.payload || 'Failed to load products by category'; // Store error message
            })
            .addCase(fetchAllProducts.pending, (state) => {
                state.status = 'loading'; // Set status to loading while fetching
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'; // Set status to succeeded once data is fetched
                state.products = action.payload; // Store fetched products
                state.filteredProducts = action.payload; // Initialize filtered products
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.status = 'failed'; // Set status to failed if there's an error
                state.error = action.payload || 'Failed to load all products'; // Store error message
            });
    }
});

// Selector functions to get specific parts of the state
export const selectAllProducts = (state) => state.shop.products;
export const selectFilteredProducts = (state) => state.shop.filteredProducts;
export const selectStatus = (state) => state.shop.status;
export const selectError = (state) => state.shop.error;
export const selectCartItems = (state) => state.shop.cart;

// Export the search action and other reducers
export const { searchProducts, clearCart, addToCart, removeFromCart } = shopSlice.actions;

// Export the reducer to be used in the Redux store
export default shopSlice.reducer;