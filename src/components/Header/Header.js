'use client';

import HeaderLogo from './components/HeaderLogo';
import HeaderSearchBar from './components/HeaderSearchBar';
import HeaderIcons from './components/HeaderIcons';
import HeaderMobileMenu from './components/HeaderMobileMenu';

export default function Header() {
    return (
        <header className="bg-primary text-white p-4 flex justify-between items-center">
            <HeaderLogo />
            <HeaderSearchBar />
            <HeaderIcons />
            <HeaderMobileMenu />
        </header>
    );
}
