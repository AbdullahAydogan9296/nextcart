import FooterLogo from './components/FooterLogo';
import FooterNavigation from './components/FooterNavigation';
import FooterCategories from './components/FooterCategories';
import FooterInformation from './components/FooterInformation';
import FooterCopyright from './components/FooterCopyright';

export default function Footer() {
    return (
        <footer className="bg-primary text-white p-6">
            <div className="container mx-auto flex flex-wrap justify-around">
                <div className="w-full md:w-1/4 flex items-center md:justify-start mb-4 md:mb-0">
                    <FooterLogo />
                </div>
                <FooterNavigation />
                <FooterCategories />
                <FooterInformation />
            </div>
            <FooterCopyright />
        </footer>
    );
}
