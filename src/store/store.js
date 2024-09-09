import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './shopSlice';
import userReducer from './userSlice';
import cartReducer from './cartSlice';

const store = configureStore({
    reducer: {
        shop: shopReducer,
        user: userReducer,
        cart: cartReducer,
    },
});

export default store;