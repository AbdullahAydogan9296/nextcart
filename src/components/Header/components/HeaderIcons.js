'use client';

import HeaderUserIcon from './HeaderUserIcon';
import HeaderCartIcon from './HeaderCartIcon';

export default function HeaderIcons() {
    return (
        <div className="relative hidden md:flex items-center space-x-4">
            {/* User Icon */}
            <HeaderUserIcon />

            {/* Cart Icon */}
            <HeaderCartIcon />
        </div>
    );
}