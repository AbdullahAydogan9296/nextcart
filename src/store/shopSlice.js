import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Helper function to perform fetch with retry mechanism
const fetchWithRetry = async (url, options = {}, retries = 3) => {
    try {
        const response = await fetch(url, options);
        // Check if response is not okay (e.g., status 404 or 500)
        if (!response.ok) {
            // Retry if retries are still available
            if (retries > 0) {
                console.warn(`Retrying... (${3 - retries + 1})`);
                return await fetchWithRetry(url, options, retries - 1);
            } else {
                // Throw error after exhausting retries
                throw new Error(`Failed after 3 retries: ${response.statusText}`);
            }
        }
        return response;
    } catch (error) {
        // Retry if a network error occurs and retries are available
        if (retries > 0) {
            console.warn(`Retrying... (${3 - retries + 1})`);
            return await fetchWithRetry(url, options, retries - 1);
        } else {
            // Throw error after exhausting retries
            throw error;
        }
    }
};

// Async thunk to fetch products by category
export const fetchProductsByCategory = createAsyncThunk(
    'shop/fetchProductsByCategory',
    async (categories, { rejectWithValue }) => {
        try {
            // Check if categories array is valid
            if (!categories || !Array.isArray(categories) || categories.length === 0) {
                throw new Error('No categories provided');
            }

            // Fetch products for each category using the retry mechanism
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
            // Flatten the array of product arrays into a single array
            return allProducts.flat();
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
            // Check if categories array is valid
            if (!categories || !Array.isArray(categories) || categories.length === 0) {
                throw new Error('No categories provided');
            }

            // Fetch products for each category using the retry mechanism
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
            // Flatten the array of product arrays into a single array
            return allProducts.flat();
        } catch (error) {
            console.error('Error fetching all products:', error);
            return rejectWithValue(error.message || 'An unknown error occurred while fetching products');
        }
    }
);

// Redux slice for shop state management
const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        products: [], // Initial state for products
        filteredProducts: [], // State for filtered products, used for search functionality
        status: 'idle', // Initial status is idle
        error: null // No error initially
    },
    reducers: {
        // Reducer to handle search functionality
        searchProducts: (state, action) => {
            state.filteredProducts = state.products.filter((product) =>
                product.title.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
    },
    extraReducers: (builder) => {
        builder
            // Handle pending state for fetching products by category
            .addCase(fetchProductsByCategory.pending, (state) => {
                state.status = 'loading';
            })
            // Handle fulfilled state for fetching products by category
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
                state.filteredProducts = action.payload; // Initialize filtered products
            })
            // Handle rejected state for fetching products by category
            .addCase(fetchProductsByCategory.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to load products by category';
            })
            // Handle pending state for fetching all products
            .addCase(fetchAllProducts.pending, (state) => {
                state.status = 'loading';
            })
            // Handle fulfilled state for fetching all products
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
                state.filteredProducts = action.payload; // Initialize filtered products
            })
            // Handle rejected state for fetching all products
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to load all products';
            });
    }
});

// Selector functions to get products, status, and error from the state
export const selectAllProducts = (state) => state.shop.products;
export const selectFilteredProducts = (state) => state.shop.filteredProducts; // Selector for filtered products
export const selectStatus = (state) => state.shop.status;
export const selectError = (state) => state.shop.error;

// Export the search action
export const { searchProducts } = shopSlice.actions;

export default shopSlice.reducer;
