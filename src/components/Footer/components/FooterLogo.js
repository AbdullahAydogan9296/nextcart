import Link from 'next/link';
import Image from 'next/image';

export default function FooterLogo() {
    return (
        <Link href='/'>
            <Image
                src="/logo.svg"
                alt="NextCart Logo"
                width={170}
                height={65}
                className="mx-auto md:mx-0 filter invert"
            />
        </Link>
    );
}
