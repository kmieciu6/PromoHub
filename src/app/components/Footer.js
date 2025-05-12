"use client"
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from '../hooks/useTranslation';
import Link from "next/link";
import Image from 'next/image';
import photo from "../assets/opening.png";

export default function Footer() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const pathname = usePathname();
    const { t } = useTranslation('common')

    const handleNavLinkClick = (href) => {
        setIsOpen(false);
        setIsHidden(true);

        if (pathname !== href) {
            window.scrollTo({top: 0, behavior: "smooth" });
        } else {
            router.push(href);
        }
    };

    return (
        <footer>
            <div className='footer-container'>
                <div className='nav-logo'>
                    <Link 
                        href="/" 
                        className="nav-logo"
                        onClick={handleNavLinkClick}
                    >
                        <h1>{t('title')}</h1>
                    </Link>
                    <p>{t('footer')}</p>
                </div>
                <div className='social_logos'>
                    <img
                        src={photo.src}
                        alt="linkedin_logo"
                    />
                    <img
                        src={photo.src}
                        alt="facebook_logo"
                    />
                </div>
            </div>
        </footer>
    );
}