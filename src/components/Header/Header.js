'use client';

import HeaderLogo from './components/HeaderLogo';
import HeaderSearchBar from './components/HeaderSearchBar';
import HeaderIcons from './components/HeaderIcons';
import HeaderMobileMenu from './components/HeaderMobileMenu';
import { useDispatch } from 'react-redux';
import { searchProducts } from '@/store/shopSlice';

export default function Header() {
    // Initialize Redux dispatch function to dispatch actions to the store
    const dispatch = useDispatch();

    // Function to handle the search input and dispatch the search action
    const handleSearch = (searchTerm) => {
        dispatch(searchProducts(searchTerm)); // Dispatch search action with the current search term
    };

    return (
        <header className="bg-primary text-white p-4 flex justify-between items-center">
            {/* Logo component */}
            <HeaderLogo />

            {/* Search bar component */}
            <HeaderSearchBar onSearch={handleSearch} />

            {/* Header Icons */}
            <HeaderIcons />

            {/* Mobile menu */}
            <HeaderMobileMenu />
        </header>
    );
}
