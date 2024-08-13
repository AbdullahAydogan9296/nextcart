import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-primary text-white p-4 flex justify-between items-center">

            {/* Logo */}
            <Link href="/">
                <Image src="/logo.svg" alt="NextCart Logo" width={120} height={40} className="filter invert" />
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-grow mx-4">
                <input
                    type="text"
                    placeholder="Search in products..."
                    className="w-full p-2 rounded-full bg-gray-100 text-gray-900 focus:outline-none"
                />
            </div>

            {/* User and Cart Icons */}
            <div className="flex items-center space-x-4">
                <Link href="#">
                    <Image src="/icons/user-icon.svg" alt="User Profile" width={24} height={24} />
                </Link>
                <Link href="#">
                    <Image src="/icons/cart-icon.svg" alt="Shopping Cart" width={24} height={24} />
                </Link>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
                <Image src="/icons/hamburger-menu.svg" alt="Mobile Menu" width={24} height={24} />
            </div>
        </header>
    );
}
