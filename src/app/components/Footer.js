"use client"
import { useTranslation } from '../hooks/useTranslation';
import Link from "next/link";

export default function Footer() {
    const { t } = useTranslation('common')

    return (
        <footer>
            <div className='footer-container'>
                <Link 
                        href="/" 
                        className="nav-logo"
                        // onClick={handleNavLinkClick}    
                    >
                    <h1>PromoHub</h1>
                </Link>            
            </div>
        </footer>
    );
}