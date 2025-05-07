"use client"
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { MdOutlineBrightnessAuto, MdLightMode, MdDarkMode } from "react-icons/md";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [mounted, setMounted]   = useState(false);
    const headerRef = useRef(null);
    const timerRef = useRef(null);
    const { theme, systemTheme, setTheme } = useTheme();
    
    useEffect(() => 
        setMounted(true), 
    []);
    
    const modes = ["system", "light", "dark"];
    const toggleTheme = () => {
        const idx = (modes.indexOf(theme) + 1) % modes.length;
        setTheme(modes[idx]);
    };

    const Icon = {
        system: MdOutlineBrightnessAuto,   // półksiężyc dla „system”
        light:  MdLightMode, // słońce
        dark:   MdDarkMode,          // księżyc
      }[theme];

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
    
    const handleNavLinkClick = () => {
        setIsOpen(false);
        setIsHidden(true);
    };

    return (
        <header ref={headerRef} className={`header ${isHidden ? "hidden" : ""}`}>
            <Link 
                href="/" 
                className="nav-logo"
                onClick={handleNavLinkClick}    
            >
                PromoHub
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
                    className="nav__link" 
                    onClick={handleNavLinkClick}
                >
                    Home
                </Link>
                <Link 
                    href="/projects" 
                    className="nav__link" 
                    onClick={handleNavLinkClick}
                >
                    Projects
                </Link>
                <Link 
                    href="/contact" 
                    className="nav__link"
                    onClick={handleNavLinkClick}
                >
                    Contact
                </Link>
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {mounted && <Icon/>}
                </button>
            </nav>
        </header>
    )
}