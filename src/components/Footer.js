import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-primary text-white p-6">
            <div className="container mx-auto flex flex-wrap justify-around">
                {/* Logo Section */}
                <div className="w-full md:w-1/4 flex items-center md:justify-start mb-4 md:mb-0">
                    <Link href='/'>
                        <Image
                            src="/logo.svg"
                            alt="NextCart Logo"
                            width={170}
                            height={65}
                            className="mx-auto md:mx-0 filter invert"
                        />
                    </Link>
                </div>
                {/* Navigation Section */}
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <h3 className="font-semibold mb-2">Explore</h3>
                    <ul className="text-bodyText">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="#">Shop</Link></li>
                        <li><Link href="#">About Us</Link></li>
                        <li><Link href="#">Contact</Link></li>
                    </ul>
                </div>
                {/* Categories Section */}
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <h3 className="font-semibold mb-2">Categories</h3>
                    <ul className="text-bodyText">
                        <li><Link href="#">Men's Fashion</Link></li>
                        <li><Link href="#">Women's Fashion</Link></li>
                        <li><Link href="#">Kids & Toys</Link></li>
                        <li><Link href="#">Cosmetics</Link></li>
                    </ul>
                </div>
                {/* Information Section */}
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <h3 className="font-semibold mb-2">Information</h3>
                    <ul className="text-bodyText">
                        <li><Link href="#">Privacy Policy</Link></li>
                        <li><Link href="#">Terms of Service</Link></li>
                        <li><Link href="#">FAQ</Link></li>
                    </ul>
                </div>
                {/* Copyright Section */}
            </div>
            <div className="container mx-auto mt-8 border-t border-gray-200 pt-4 text-center text-sm text-bodyText">
                NextCart eCommerce. © 2024
            </div>
        </footer>
    );
}
