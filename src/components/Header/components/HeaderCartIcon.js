'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeaderCartIcon() {
    return (
        <Link href="/cart">
            <Image src="/icons/cart-icon.svg" alt="Shopping Cart" width={24} height={24} />
        </Link>
    );
}