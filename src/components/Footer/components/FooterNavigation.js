import Link from 'next/link';

export default function FooterNavigation() {
    return (
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-semibold mb-2">Explore</h3>
            <ul className="text-bodyText">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/shop">Shop</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}
