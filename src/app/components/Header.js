"use client"
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsHidden(true);
            setIsOpen(false);
        }, 6000);
        
        const handleClickOutside = (e) => {
            if (headerRef.current && !headerRef.current.contains(e.target)) {
                setIsHidden(true);
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            clearTimeout(timer);
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    

    const toggleMenu = () => {
        setIsOpen((o) => !o);
        setIsHidden(false);        // przy ponownym otwarciu przywracamy header
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
            </nav>
        </header>
    )
}