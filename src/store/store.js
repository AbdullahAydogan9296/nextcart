import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './shopSlice';
import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        shop: shopReducer,
        user: userReducer,
    },
});

export default store;