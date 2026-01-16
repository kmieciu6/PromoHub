"use client"
import {usePathname} from 'next/navigation';
import useTranslation from '../hooks/useTranslation';

export default function Footer() {
    const pathname = usePathname();
    const { t } = useTranslation('common')

    const handleNavClick = (href) => (e) => {

        if (pathname === href) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <footer>
            <div className='footer-container'>
                <div className='nav-logo'>
                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                    <a
                        href="/" 
                        className="nav-logo"
                        onClick={handleNavClick("/")}
                    >
                        <h1>{t('title')}</h1>
                    </a>
                    <p>{t('')}</p>
                </div>
                <div className='social_logos'>
                    <img
                        src='../assets/opening.png'
                        alt="linkedin_logo"
                    />
                    <img
                        src='../assets/opening.png'
                        alt="facebook_logo"
                    />
                </div>
            </div>
        </footer>
    );
}