import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function HeaderMobileMenu() {
    // State to track whether the menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuButtonRef = useRef(null);
    const [menuTopPosition, setMenuTopPosition] = useState(0);

    // Function to toggle the menu open or closed
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (menuButtonRef.current) {
            // Calculate the position of the menu button to align the menu accordingly
            setMenuTopPosition(menuButtonRef.current.getBoundingClientRect().bottom);
        }
    }, [isMenuOpen]);

    useEffect(() => {
        // Close the menu when the window is resized to a desktop width
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {/* Mobile menu button */}
            <div ref={menuButtonRef} className="md:hidden">
                <button onClick={toggleMenu}>
                    <Image
                        src="/icons/hamburger-menu.svg"
                        alt="Mobile Menu"
                        width={24}
                        height={24}
                    />
                </button>
            </div>
            {isMenuOpen && (
                // The menu that appears when the button is clicked
                <div
                    className="absolute right-0 w-64 h-3/4 bg-primary text-white flex flex-col space-y-4 p-4 z-50 transition-transform transform translate-x-0"
                    style={{ top: `${menuTopPosition}px` }}
                >
                    {/* Links inside the mobile menu */}
                    <Link href="/" onClick={toggleMenu} className="hover:underline">
                        Home
                    </Link>
                    <Link href="/shop" onClick={toggleMenu} className="hover:underline">
                        Shop
                    </Link>
                    <Link href="/profile" onClick={toggleMenu} className="hover:underline">
                        Profile
                    </Link>
                    <Link href="/cart" onClick={toggleMenu} className="hover:underline">
                        Cart
                    </Link>
                    <Link href="/about" onClick={toggleMenu} className="hover:underline">
                        About Us
                    </Link>
                    <Link href="/contact" onClick={toggleMenu} className="hover:underline">
                        Contact
                    </Link>
                </div>
            )}
        </>
    );
}
