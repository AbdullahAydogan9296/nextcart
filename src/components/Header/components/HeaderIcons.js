import Link from 'next/link';
import Image from 'next/image';

export default function HeaderIcons() {
    return (
        <div className="hidden md:flex items-center space-x-4">
            <Link href="/profile">
                <Image src="/icons/user-icon.svg" alt="User Profile" width={24} height={24} />
            </Link>
            <Link href="/cart">
                <Image src="/icons/cart-icon.svg" alt="Shopping Cart" width={24} height={24} />
            </Link>
        </div>
    );
}
