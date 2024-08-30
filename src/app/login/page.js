'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsMember, loginAsGuest, clearErrorMessage } from '@/store/userSlice';
import { useRouter } from 'next/navigation';
import FormHeader from '@/components/LoginAndRegister/FormHeader';
import ErrorMessage from '@/components/LoginAndRegister/ErrorMessage';
import InputField from '@/components/LoginAndRegister/InputField';
import SubmitButton from '@/components/LoginAndRegister/SubmitButton';

const Login = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const errorMessage = useSelector(state => state.user.errorMessage);
    const [email, setEmail] = useState(''); // State for email input
    const [password, setPassword] = useState(''); // State for password input
    const [error, setError] = useState(''); // Local error message state

    // Function to validate email format
    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

    // Handle member login
    const handleMemberLogin = () => {
        if (!email || !password) {
            setError('Please fill out all fields.');
        } else if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
        } else {
            setError('');
            dispatch(loginAsMember({ email, password }));
        }
    };

    // Handle continue as guest
    const handleGuestContinue = () => {
        dispatch(loginAsGuest());
        router.push('/'); // Redirect to home page
    };

    // Clear error message on input change
    const handleInputChange = (setter) => (e) => {
        setError('');
        dispatch(clearErrorMessage()); // Clear error message in Redux state
        setter(e.target.value);
    };

    // Redirect to home if login is successful
    if (useSelector(state => state.user.isAuthenticated) && !errorMessage) {
        router.push('/');
    }

    return (
        <div className="login-container flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="bg-white p-8 shadow-md rounded-lg max-w-md w-full">
                <FormHeader type="login" /> {/* Header for the form, indicates it's a login form */}
                <ErrorMessage message={error || errorMessage} /> {/* Error message component */}
                <InputField
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={handleInputChange(setEmail)}
                />
                <InputField
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleInputChange(setPassword)}
                />
                <SubmitButton label="Continue" onClick={handleMemberLogin} />
                <p className="text-center text-gray-500 mb-4">OR</p>
                <SubmitButton
                    label="Continue as Guest"
                    onClick={handleGuestContinue}
                    variant="secondary"
                />
                <p className="text-center">
                    New user?{' '}
                    <button onClick={() => router.push('/register')} className="text-blue-500">
                        Create an account
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;