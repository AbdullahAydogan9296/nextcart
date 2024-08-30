'use client';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { logout } from '@/store/userSlice';

export default function HeaderUserIcon() {
    // Get user authentication status from Redux store
    const { isAuthenticated, isGuest, email } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const router = useRouter();
    const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility

    // Handle click on user icon
    const handleUserIconClick = () => {
        if (!isAuthenticated) {
            router.push('/login'); // Redirect to login page if not authenticated
        } else {
            setShowDropdown((prev) => !prev); // Toggle dropdown visibility
        }
    };

    // Handle logout action
    const handleLogout = () => {
        dispatch(logout()); // Dispatch logout action
        setShowDropdown(false); // Close dropdown menu
    };

    // Function to truncate email if it's too long
    const truncateEmail = (email) => {
        return email.length > 20 ? email.substring(0, 17) + '...' : email;
    };

    return (
        <div className="relative">
            {/* User Icon */}
            <Image
                src="/icons/user-icon.svg"
                alt="User Profile"
                width={24}
                height={24}
                className="cursor-pointer"
                onClick={handleUserIconClick}
            />
            {/* Dropdown Menu */}
            {isAuthenticated && showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-md z-50">
                    <div className="px-4 py-2 text-sm" title={email}>
                        {isGuest ? 'Guest' : truncateEmail(email)} {/* Display 'Guest' or truncated email */}
                    </div>
                    <div className="border-t border-gray-200"></div>
                    <button
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        onClick={handleLogout}
                    >
                        Log out
                    </button>
                </div>
            )}
        </div>
    );
}