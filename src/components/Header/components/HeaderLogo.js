import Link from 'next/link';
import Image from 'next/image';

export default function HeaderLogo() {
    return (
        <Link href="/">
            <Image src="/logo.svg" alt="NextCart Logo" width={120} height={40} className="filter invert" />
        </Link>
    );
}
