"use client"
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import LanguageDropdown from "./LanguageDropdown";
import useTranslation from '../hooks/useTranslation';
import ThemeToggle from "@/app/components/ThemeToggle";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const headerRef = useRef(null);
    const timerRef = useRef(null);
    const pathname = usePathname();
    const { t } = useTranslation('common')

    useEffect(() => {
        const handleClickOutside = e => {
            if (headerRef.current && !headerRef.current.contains(e.target)) {
                setIsHidden(true);
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (!isHidden) {
            timerRef.current = setTimeout(() => {
                setIsHidden(true);
                setIsOpen(false);
            }, 10000);
        }
        return () => clearTimeout(timerRef.current);
    }, [isHidden]);
    

    const toggleMenu = () => {
        setIsOpen((o) => !o);
        if (isHidden) setIsHidden(false);
    };

    const handleNavClick = (href) => (e) => {
        setIsOpen(false);
        setIsHidden(true);

        if (pathname === href) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <header ref={headerRef} className={`header ${isHidden ? "hidden" : ""}`}>
            <div className="header-container">
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a
                    href="/"
                    className="nav-logo"
                    onClick={handleNavClick("/")}
                >
                    <h2>{t('title')}</h2>
                </a>
                <button
                    className={`hamburger ${isOpen ? "is-open" : ""}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    >
                    <span />
                    <span />
                    <span />
                </button>

                <nav className={`nav ${isOpen ? "is-open" : ""}`}>
                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                    <a
                        href="/"
                        className="nav-link" 
                        onClick={handleNavClick("/")}
                    >
                        <h5>{t('home')}</h5>
                    </a>
                    <a
                        href="/projects_page" 
                        className="nav-link"
                        onClick={handleNavClick("/projects_page")}
                    >
                        <h5>{t('projects')}</h5>
                    </a>
                    <a
                        href="/contact_page" 
                        className="nav-link"
                        onClick={handleNavClick("/contact_page")}
                    >
                        <h5>{t('contact')}</h5>
                    </a>
                    <LanguageDropdown/>
                    <ThemeToggle/>
                </nav>
            </div>
        </header>
    )
}