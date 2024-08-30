import { createSlice } from '@reduxjs/toolkit';

// Example user list to simulate user authentication
const userList = [
    { email: 'user@example.com', password: 'Password123' } // Sample user
];

// Initial state for user authentication
const initialState = {
    isAuthenticated: false, // Whether the user is authenticated
    isGuest: false,         // Whether the user is a guest
    email: '',              // User email
    errorMessage: '',       // Error message for login/register failures
};

// Create a slice for user authentication state management
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Action to log in as a guest
        loginAsGuest: (state) => {
            state.isAuthenticated = true; // Set authenticated to true
            state.isGuest = true;         // Set guest status to true
            state.email = '';             // No email for guest users
            state.errorMessage = '';      // Clear any existing error messages
        },
        // Action to log in as a member
        loginAsMember: (state, action) => {
            const { email, password } = action.payload;
            const user = userList.find(user => user.email === email && user.password === password);

            if (user) {
                state.isAuthenticated = true; // Set authenticated to true
                state.isGuest = false;        // Set guest status to false
                state.email = email;          // Store user email
                state.errorMessage = '';      // Clear any existing error messages
            } else {
                state.errorMessage = 'Incorrect email or password.'; // Set error message if login fails
            }
        },
        // Action to register a new user
        registerUser: (state, action) => {
            const { email, password } = action.payload;
            const userExists = userList.some(user => user.email === email);

            if (!userExists) {
                userList.push({ email, password }); // Add new user to the user list
                state.isAuthenticated = true;      // Set authenticated to true
                state.isGuest = false;             // Set guest status to false
                state.email = email;               // Store user email
                state.errorMessage = '';           // Clear any existing error messages
            } else {
                state.errorMessage = 'This email address is already registered.'; // Set error message if email already exists
            }
        },
        // Action to log out the user
        logout: (state) => {
            state.isAuthenticated = false; // Set authenticated to false
            state.isGuest = false;         // Reset guest status
            state.email = '';              // Clear user email
            state.errorMessage = '';       // Clear any existing error messages
        },
        // Action to clear error messages
        clearErrorMessage: (state) => {
            state.errorMessage = '';       // Clear error message
        },
    },
});

// Export actions and reducer
export const { loginAsGuest, loginAsMember, registerUser, logout, clearErrorMessage } = userSlice.actions;
export default userSlice.reducer;