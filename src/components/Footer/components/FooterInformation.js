import Link from 'next/link';

export default function FooterInformation() {
    return (
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-semibold mb-2">Information</h3>
            <ul className="text-bodyText">
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service">Terms of Service</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
            </ul>
        </div>
    );
}
