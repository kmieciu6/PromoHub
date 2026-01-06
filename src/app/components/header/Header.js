"use client"
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import LanguageDropdown from "./LanguageDropdown";
import useTranslation from '../../hooks/useTranslation';
import ThemeToggle from "@/app/components/header/ThemeToggle";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const headerRef = useRef(null);
    const timerRef = useRef(null);
    const pathname = usePathname();
    const { t } = useTranslation('common')
    const HOME_PATHS = ["/"];

    const isHome = HOME_PATHS.includes(pathname);

    const SUBPAGE_MENUS = {
        "/privacy_policy": [
            { key: "home", label: t("main_page"), href: "/" },
            { key: "projects", label: t("projects"), href: "/projects_page" },
            { key: "contact", label: t("contact"), href: "/contact_page" },
        ],
        "/projects_page": [
            { key: "home", label: t("main_page"), href: "/" },
            { key: "contact", label: t("contact"), href: "/contact_page" },
        ],
        "/contact_page": [
            { key: "home", label: t("main_page"), href: "/" },
            { key: "projects", label: t("projects"), href: "/projects_page" },
        ]
    };

    // domyślne menu dla „reszty” (w tym 404)
    const DEFAULT_SUBPAGE_MENU = [
        { key: "home", label: t("main_page"), href: "/" },
        { key: "projects", label: t("projects"), href: "/projects_page" },
        { key: "contact", label: t("contact"), href: "/contact_page" },
    ];

    const currentSubpageMenu = SUBPAGE_MENUS[pathname] || DEFAULT_SUBPAGE_MENU;

    const closeMenu = () => {
        setIsHidden(true);
        setIsOpen(false);
    };

    const scrollToId = (id) => (e) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        closeMenu();
    };

    useEffect(() => {
        const handleClickOutside = e => {
            if (headerRef.current && !headerRef.current.contains(e.target)) {
                closeMenu()
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
                closeMenu()
            }, 10000);
        }
        return () => clearTimeout(timerRef.current);
    }, [isHidden]);

    const toggleMenu = () => {
        setIsOpen((o) => !o);
        if (isHidden) setIsHidden(false);
    };

    const handleLogoClick = (e) => {
        if (pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            closeMenu();
        } else {
            // NIE blokujemy defaulta, bo chcesz reload i top
            closeMenu();
        }
    };

    return (
        <header ref={headerRef} className={`header ${isHidden ? "hidden" : ""}`}>
            <div className="header-container">
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a
                    href="/"
                    className="nav-logo"
                    onClick={handleLogoClick}
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
                    {isHome ? (
                        <>
                            <a className="nav-link" href="#" onClick={scrollToId("services")}>
                                <h4>{t("services")}</h4>
                            </a>
                            <a className="nav-link" href="#" onClick={scrollToId("why_us")}>
                                <h4>{t("why_us")}</h4>
                            </a>
                            <a className="nav-link" href="#" onClick={scrollToId("technologies")}>
                                <h4>{t("technologies")}</h4>
                            </a>
                            <a className="nav-link" href="/projects_page" onClick={() => closeMenu()}>
                                <h4>{t("projects")}</h4>
                            </a>
                            <a className="nav-link" href="/contact_page" onClick={() => closeMenu()}>
                                <h4>{t("contact")}</h4>
                            </a>
                        </>
                    ) : (
                        <>
                            {currentSubpageMenu.map((item) => (
                                <a
                                    key={item.key}
                                    href={item.href || "#"}
                                    className="nav-link"
                                    onClick={() => closeMenu()}
                                >
                                <h4>{item.label}</h4>
                                </a>
                            ))}
                        </>
                    )}
                    <LanguageDropdown/>
                    <ThemeToggle/>
                </nav>
            </div>
        </header>
    )
}