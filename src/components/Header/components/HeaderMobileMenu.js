import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/store/userSlice'; // Import the logout action

export default function HeaderMobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuButtonRef = useRef(null);
    const [menuTopPosition, setMenuTopPosition] = useState(0);
    const dispatch = useDispatch();

    // Fetch authentication state
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

    // Toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (menuButtonRef.current) {
            setMenuTopPosition(menuButtonRef.current.getBoundingClientRect().bottom);
        }
    }, [isMenuOpen]);

    useEffect(() => {
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

    // Handle Logout
    const handleLogout = () => {
        dispatch(logout());
        toggleMenu();
    };

    return (
        <>
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
                <div
                    className="absolute right-0 w-64 h-3/4 bg-primary text-white flex flex-col space-y-4 p-4 z-50 transition-transform transform translate-x-0"
                    style={{ top: `${menuTopPosition}px` }}
                >
                    <Link href="/" onClick={toggleMenu} className="hover:underline">
                        Home
                    </Link>
                    <Link href="/shop" onClick={toggleMenu} className="hover:underline">
                        Shop
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

                    {/* Conditional Login/Logout Links */}
                    <div className="mt-auto">
                        {isAuthenticated ? (
                            <button onClick={handleLogout} className="hover:underline">
                                Logout
                            </button>
                        ) : (
                            <Link href="/login" onClick={toggleMenu} className="hover:underline">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}