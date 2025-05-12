"use client"
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { MdOutlineBrightnessAuto, MdLightMode, MdDarkMode } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from '../hooks/useTranslation';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [mounted, setMounted]   = useState(false);
    const headerRef = useRef(null);
    const timerRef = useRef(null);
    const { theme, systemTheme, setTheme } = useTheme();
    const router = useRouter();
    const pathname = usePathname();
    const { t } = useTranslation('common')
     
    useEffect(() => 
        setMounted(true), 
    []);
    
    const modes = ["system", "light", "dark"];
    const toggleTheme = () => {
        const idx = (modes.indexOf(theme) + 1) % modes.length;
        setTheme(modes[idx]);
    };

    let Icon = null;
    if (mounted) {
        Icon = {
            system: MdOutlineBrightnessAuto,
            light:  MdLightMode,
            dark:   MdDarkMode,
        }[theme];
    }

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
        <header ref={headerRef} className={`header ${isHidden ? "hidden" : ""}`}>
            <div className="header-container">
                <Link 
                    href="/" 
                    className="nav-logo"
                    onClick={handleNavLinkClick}    
                >
                    <h2>{t('title')}</h2>
                </Link>
                <button
                    className={`hamburger ${isOpen ? "is-open" : ""}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    >
                    <span />
                    <span />
                    <span />
                </button>
                {/* nawigacja */}
                <nav className={`nav ${isOpen ? "is-open" : ""}`}>
                    <Link 
                        href="/" 
                        className="nav-link" 
                        onClick={handleNavLinkClick}
                    >
                        <h5>{t('home')}</h5>
                    </Link>
                    <Link 
                        href="/projects" 
                        className="nav-link" 
                        onClick={handleNavLinkClick}
                    >
                        <h5>{t('projects')}</h5>
                    </Link>
                    <Link 
                        href="/contact" 
                        className="nav-link"
                        onClick={handleNavLinkClick}
                    >
                        <h5>{t('contact')}</h5>
                    </Link>
                    <LanguageDropdown/>
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {mounted && Icon && <Icon/>}
                    </button>
                </nav>
            </div>
        </header>
    )
}