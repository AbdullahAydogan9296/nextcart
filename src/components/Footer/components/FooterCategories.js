import Link from 'next/link';

export default function FooterCategories() {
    return (
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-semibold mb-2">Categories</h3>
            <ul className="text-bodyText">
                <li><Link href="/shop/mens-fashion">Men&apos;s Fashion</Link></li>
                <li><Link href="/shop/womens-fashion">Women&apos;s Fashion</Link></li>
                <li><Link href="/shop/electronics">Electronics</Link></li>
                <li><Link href="/shop/cosmetics">Cosmetics</Link></li>
            </ul>
        </div>
    );
}
