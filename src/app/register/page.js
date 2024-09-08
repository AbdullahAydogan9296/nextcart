'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, loginAsGuest, clearErrorMessage } from '@/store/userSlice';
import { useRouter } from 'next/navigation';
import FormHeader from '@/components/LoginAndRegisterPage/FormHeader';
import ErrorMessage from '@/components/LoginAndRegisterPage/ErrorMessage';
import InputField from '@/components/LoginAndRegisterPage/InputField';
import SubmitButton from '@/components/LoginAndRegisterPage/SubmitButton';

const Register = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const errorMessage = useSelector(state => state.user.errorMessage);
    const [email, setEmail] = useState(''); // State for email input
    const [password, setPassword] = useState(''); // State for password input
    const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password input
    const [error, setError] = useState(''); // Local error message state

    // Function to validate email format
    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

    // Handle user registration
    const handleRegister = () => {
        if (!email || !password || !confirmPassword) {
            setError('Please fill out all fields.');
        } else if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
        } else if (password !== confirmPassword) {
            setError('Passwords do not match.');
        } else {
            setError('');
            dispatch(registerUser({ email, password }));
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

    // Redirect to home if registration is successful
    if (useSelector(state => state.user.isAuthenticated) && !errorMessage) {
        router.push('/');
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-8 shadow-md rounded-lg max-w-md w-full">
                <FormHeader type="register" /> {/* Header for the form, indicates it's a registration form */}
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
                <InputField
                    type="password"
                    placeholder="Password (Again)"
                    value={confirmPassword}
                    onChange={handleInputChange(setConfirmPassword)}
                />
                <SubmitButton label="Continue" onClick={handleRegister} />
                <p className="text-center text-gray-500 mb-4">OR</p>
                <SubmitButton
                    label="Continue as Guest"
                    onClick={handleGuestContinue}
                    variant="secondary"
                />
                <p className="text-center">
                    Already a member?{' '}
                    <button onClick={() => router.push('/login')} className="text-blue-500">
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Register;