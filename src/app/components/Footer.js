"use client"
import {usePathname} from 'next/navigation';
import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";

export default function Footer() {
    const pathname = usePathname();
    const { t } = useTranslation('common')

    const handleNavClick = (href) => (e) => {

        if (pathname === href) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const [secRef, isSecHidden] = useIntersectionHide();

    return (
        <footer>
            <div ref={secRef} className={`open footer_container ${isSecHidden ? "hidden" : ""}`}>
                <div className='footer_content'>
                    <div className='nav-logo'>
                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <a
                            href="/"
                            className="nav-logo"
                            onClick={handleNavClick("/")}
                        >
                            <h1>{t('title')}</h1>
                        </a>
                        <p>{t('footer_text1')}</p>
                    </div>

                    <div className='contact_info'>
                        <div className='contact_info_links'>
                            <p>{t('footer_text2')}</p>
                            <a href="mailto:jakub.kmiecik96@gmail.com"><p>jakub.kmiecik96@gmail.com</p></a>
                        </div>
                        <div className='contact_info_links'>
                            <p>{t('footer_text3')}</p>
                            <a href="tel:+48600340928"><p>+48 600 340 928</p></a>
                        </div>
                        <div className='social_logos'>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                <img
                                    src='/icons/linkedin.svg'
                                    alt="linkedin_logo"
                                />
                            </a>
                            <a href="https://github.com/" target="_blank" rel="noreferrer">
                                <img
                                    src='/icons/github.svg'
                                    alt="git_logo"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='coppy_right'>
                    <p>© 2026 PromoHub</p>
                </div>
            </div>
        </footer>
    );
}