"use client"
import {useState, useEffect, useRef, useMemo} from "react";
import { usePathname, useRouter } from "next/navigation";
import useTranslation from '../../hooks/useTranslation';
import ThemeToggle from "@/app/components/header/ThemeToggle";
import Dropdown from "@/app/components/header/Dropdown";
import Image from "next/image";
import logo_dark from "../../../../public/logos/slase_logo.png";
import logo_light from "../../../../public/logos/slase_logo_light.png";

const SUBPAGE_MENUS = {
    "/consulting_page": {
        removeDropdownItems: {
            services_dd: ["consulting"],
        }
    },
    "/mobile_applications_page": {
        removeDropdownItems: {
            services_dd: ["mobile_applications"],
        }
    },
    "/desktop_applications_page": {
        removeDropdownItems: {
            services_dd: ["desktop_applications"],
        }
    },
    "/simulators_page": {
        removeDropdownItems: {
            services_dd: ["simulators"],
        }
    },
    "/saas_applications_page": {
        removeDropdownItems: {
            services_dd: ["saas_applications"],
        }
    },
    "/graphics_visualizations_page": {
        removeDropdownItems: {
            services_dd: ["graphics_visualizations"],
        }
    },
    "/cybersecurity_page": {
        removeDropdownItems: {
            services_dd: ["cybersecurity"],
        }
    },
    "/sound_engineering_page": {
        removeDropdownItems: {
            services_dd: ["sound_engineering"],
        }
    },
    "/educational_simulation_game_page": {
        removeDropdownItems: {
            projects_dd: ["educational_simulation_game"],
        }
    },
    "/osc_application_page": {
        removeDropdownItems: {
            projects_dd: ["osc_application"],
        }
    },
    "/wampir_page": {
        removeDropdownItems: {
            projects_dd: ["wampir"],
        }
    },
    "/deep_locust_page": {
        removeDropdownItems: {
            projects_dd: ["deep_locust"],
        }
    },
    "/subcontracting_page": {
        removeDropdownItems: {
            projects_dd: ["subcontracting"],
        }
    },
    "/who_we_are_page": {
        removeDropdownItems: {
            about_dd: ["who_we_are"],
        }
    },
    "/how_we_work_page": {
        removeDropdownItems: {
            about_dd: ["how_we_work"],
        }
    },
    "/cooperation_page": {
        removeDropdownItems: {
            about_dd: ["cooperation"],
        }
    },
    // "/contact_page": {
    //     remove: ["contact"],
    // }
};

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const router = useRouter();
    const [forceCloseKey, setForceCloseKey] = useState(0);

    const headerRef = useRef(null);
    const timerRef = useRef(null);
    const pathname = usePathname();
    const { t, local, changeLanguage } = useTranslation("common");
    const HOME_PATHS = ["/"];

    const isHome = HOME_PATHS.includes(pathname);

    const servicesSite = useMemo(() => [
        { id: "scope_of_services", key: "scope_of_services", label: t("services_title1"), href: isHome ? "#services" : "/",},
        { id: "consulting", key: "consulting", label: t("consulting"), href: "/consulting_page" },
        { id: "mobile_applications", key: "mobile_applications", label: t("mobile_applications"), href: "/mobile_applications_page" },
        { id: "desktop_applications", key: "desktop_applications", label: t("desktop_applications"), href: "/desktop_applications_page" },
        { id: "simulators", key: "simulators", label: t("simulators"), href: "/simulators_page" },
        { id: "saas_applications", key: "saas_applications", label: t("saas_applications"), href: "/saas_applications_page" },
        { id: "graphics_visualizations", key: "graphics_visualizations", label: t("graphics_visualizations"), href: "/graphics_visualizations_page" },
        { id: "cybersecurity", key: "cybersecurity", label: t("cybersecurity"), href: "/cybersecurity_page" },
        { id: "sound_engineering", key: "sound_engineering", label: t("sound_engineering"), href: "/sound_engineering_page" },
    ], [t, isHome]);

    const projectsSite = useMemo(() => [
        { id: "projects", key: "projects", label: t("projects"), href: isHome ? "#projects" : "/",},
        { id: "educational_simulation_game", key: "educational_simulation_game", label: t("educational_simulation_game"), href: "/educational_simulation_game_page" },
        { id: "osc_application", key: "osc_application", label: t("osc_application"), href: "/osc_application_page" },
        { id: "wampir", key: "wampir", label: t("wampir"), href: "/wampir_page" },
        { id: "deep_locust", key: "deep_locust", label: t("deep_locust"), href: "/deep_locust_page" },
        { id: "subcontracting", key: "subcontracting", label: t("subcontracting"), href: "/subcontracting_page" },
    ], [t, isHome]);

    const aboutSite = useMemo(() => [
        { id: "who_we_are", key: "who_we_are", label: t("who_we_are"), href: "/who_we_are_page" },
        { id: "how_we_work", key: "how_we_work", label: t("how_we_work"), href: "/how_we_work_page" },
        { id: "cooperation", key: "cooperation", label: t("cooperation"), href: "/cooperation_page" },
    ], [t]);

    const BASE_SUBPAGE_MENU = useMemo(() => ([
        { type: "link", key: "home", label: t("main_page"), href: "/" },
        {
            type: "dropdown",
            key: "services_dd",
            label: <h4>{t("services")} ▼</h4>,
            align: "left",
            items: servicesSite,
        },
        {
            type: "dropdown",
            key: "projects_dd",
            label: <h4>{t("projects")} ▼</h4>,
            align: "left",
            items: projectsSite,
        },
        // { type: "link", key: "projects", label: t("projects"), href: "#projects" },
        { type: "link", key: "our_partners", label: t("our_partners"), href: "#cooperation" },
        {
            type: "dropdown",
            key: "about_dd",
            label: <h4>{t("about_us")} ▼</h4>,
            align: "left",
            items: aboutSite,
        },
        { type: "link", key: "contact", label: t("contact"), href: "#contact" },
    ]), [t, servicesSite, projectsSite, aboutSite]);

    const currentSubpageMenu = useMemo(() => {
        const override = SUBPAGE_MENUS[pathname];
        let menu = BASE_SUBPAGE_MENU;

        if (override?.remove?.length) {
            menu = menu.filter((item) => !override.remove.includes(item.key));
        }

        if (override?.removeDropdownItems) {
            menu = menu.map((item) => {
                if (item.type !== "dropdown") return item;

                const toRemove = override.removeDropdownItems[item.key];
                if (!toRemove) return item;

                return {
                    ...item,
                    items: item.items.filter((sub) => !toRemove.includes(sub.key)),
                };
            });
        }

        if (override?.add?.length) {
            menu = [...menu, ...override.add];
        }

        return menu;
    }, [pathname, BASE_SUBPAGE_MENU]);


    const LANGUAGES = [
        { code: "pl", label: "PL" },
        { code: "en", label: "EN" },
        // { code: "de", label: "DE" },
    ];

    const currentLang = LANGUAGES.find((l) => l.code === local) || LANGUAGES[1];

    const languageItems = LANGUAGES
        .filter((l) => l.code !== local)
        .map((l) => ({
            id: l.code,
            label: <h4>{l.label}</h4>,
            onSelect: () => {
                changeLanguage(l.code);
                // opcjonalnie: zamknij hamburger menu po wyborze języka
                // closeMenu();
            },
        }));

    const closeMenu = () => {
        setIsHidden(true);
        setIsOpen(false);
        setForceCloseKey((k) => k + 1);
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

        setForceCloseKey((k) => k + 1);
    };

    const goHomeAndScroll = (id) => {
        if (!id) return;

        // zapamiętaj tylko na jedną nawigację
        sessionStorage.setItem("scrollToIdOnce", id);

        // przejdź na / bez #hash
        router.push("/");
        closeMenu();
    };

    const smartNavigate = (e, href) => {
        if (!href) return;

        if (href === "#contact" && pathname !== "/") {
            e?.preventDefault?.();

            if (scrollToIdHere("contact")) {
                closeMenu();
                return;
            }
        }

        if (href.startsWith("#")) {
            e?.preventDefault?.();

            const id = href.slice(1);

            // ✅ zawsze wyłącz Projects na czas programowego scrolla
            sessionStorage.setItem("ignoreProjectsOnce", "1");
            // ✅ zawsze wykonuj scroll w HomePage (jedna ścieżka)
            sessionStorage.setItem("scrollToIdOnce", id);

            // jeśli jesteś na home – nie nawiguj, tylko odpal efekt w HomePage
            if (pathname === "/") {
                // “ping” żeby HomePage effect odpalił (bez zmiany URL)
                window.dispatchEvent(new Event("app:scrollToIdOnce")); // opcjonalne, patrz niżej
            } else {
                router.push("/");
            }

            closeMenu();
            return;
        }

        // obsłuż #id i /#id
        if (href.includes("#")) {
            e?.preventDefault?.();

            const hash = href.split("#")[1];
            if (!hash) return;

            const el = document.getElementById(hash);
            if (el) {
                sessionStorage.setItem("ignoreProjectsOnce", "1");
                sessionStorage.setItem("scrollToIdOnce", hash);
                window.dispatchEvent(new Event("app:scrollToIdOnce"));
                closeMenu();
                return;
            }

            sessionStorage.setItem("ignoreProjectsOnce", "1");

            goHomeAndScroll(hash);
            return;
        }

        // normalny link → pozwól defaultowi (albo router.push, jeśli chcesz SPA)
        closeMenu();
    };

    const scrollToIdHere = (id) => {
        const el = document.getElementById(id);
        if (!el) return false;

        const headerH = headerRef.current?.offsetHeight ?? 0;
        const y = el.getBoundingClientRect().top + window.scrollY - headerH - 12;

        window.scrollTo({ top: y, behavior: "smooth" });
        return true;
    };

    return (
        <header ref={headerRef} className={`header ${isHidden ? "hidden" : ""}`}>
            <div className="header-container">
                <a
                    type="button"
                    className="nav-logo"
                    onClick={(e) => smartNavigate(e,"#home")}
                >
                    <Image src={logo_dark} alt='logo' className='logo_dark'/>
                    <Image src={logo_light} alt='logo' className='logo_light' />
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
                            <Dropdown
                                forceClose={forceCloseKey}
                                label={<h4>{t("services")} ▼</h4>}
                                items={servicesSite.map((x) => ({
                                    ...x,
                                    onSelect: (x.href || "").startsWith("#")
                                        ? (e) => smartNavigate(e, x.href)
                                        : undefined,
                                }))}
                            />
                            <Dropdown
                                forceClose={forceCloseKey}
                                label={<h4>{t("projects")} ▼</h4>}
                                items={projectsSite.map((x) => ({
                                    ...x,
                                    onSelect: (x.href || "").startsWith("#")
                                        ? (e) => smartNavigate(e, x.href)
                                        : undefined,
                                }))}
                            />
                            {/*<a*/}
                            {/*    type="button"*/}
                            {/*    className="nav-link"*/}
                            {/*    onClick={(e) => smartNavigate(e,"#projects")}*/}
                            {/*>*/}
                            {/*    <h4>{t("projects")}</h4>*/}
                            {/*</a>*/}
                            <a
                                type="button"
                                className="nav-link"
                                onClick={(e) => smartNavigate(e,"#our_partners")}
                            >
                                <h4>{t("our_partners")}</h4>
                            </a>
                            {/*<a className="nav-link" href="#" onClick={scrollToId("how_we_work")}>*/}
                            {/*    <h4>{t("how_we_work")}</h4>*/}
                            {/*</a>*/}
                            {/*<a className="nav-link" href="#" onClick={scrollToId("technologies")}>*/}
                            {/*    <h4>{t("technologies")}</h4>*/}
                            {/*</a>*/}
                            <Dropdown
                                forceClose={forceCloseKey}
                                label={<h4>{t("about_us")} ▼</h4>}
                                // items={aboutSite}
                                items={aboutSite.map((x) => ({
                                    ...x,
                                    onSelect: (x.href || "").startsWith("#")
                                        ? (e) => smartNavigate(e, x.href)
                                        : undefined,
                                }))}
                            />
                            <a
                                type="button"
                                className="nav-link"
                                onClick={(e) => smartNavigate(e,"#contact")}
                            >
                                <h4>{t("contact")}</h4>
                            </a>
                            {/*<a className="nav-link" href="/contact_page" onClick={() => closeMenu()}>*/}
                            {/*    <h4>{t("contact")}</h4>*/}
                            {/*</a>*/}
                        </>
                    ) : (
                        <>
                            {currentSubpageMenu.map((item) => {
                                if (item.type === "dropdown") {
                                    return (
                                        <Dropdown
                                            key={item.key}
                                            forceClose={forceCloseKey}
                                            label={item.label}
                                            items={item.items.map((x) => {
                                                const isServicesScope =
                                                    item.key === "services_dd" && x.key === "scope_of_services";
                                                const isProjectsAnchor =
                                                    item.key === "projects_dd" && x.key === "projects";
                                                return {
                                                ...x,
                                                onSelect: isServicesScope
                                                        ? () => goHomeAndScroll("services")
                                                        : isProjectsAnchor
                                                        ? () => goHomeAndScroll("projects") : x.onSelect,
                                                };
                                            })}
                                            onAfterSelect={closeMenu}
                                        />
                                    );
                                }
                                // default: link
                                return (
                                    <a
                                        key={item.key}
                                        href={item.href || "#"}
                                        className="nav-link"
                                        onClick={(e) => {
                                            if (item.key === "projects") {
                                                e.preventDefault();
                                                goHomeAndScroll("projects");
                                                return;
                                            }
                                            if (item.key === "our_partners") {
                                                e.preventDefault();
                                                goHomeAndScroll("our_partners");
                                                return;
                                            }
                                            smartNavigate(e, item.href);
                                        }}                                    >
                                        <h4>{item.label}</h4>
                                    </a>
                                );
                            })}
                        </>
                    )}
                    <Dropdown
                        forceClose={forceCloseKey}
                        label={<h4>{currentLang.label} ▼</h4>}
                        items={languageItems}
                    />
                    <ThemeToggle/>
                </nav>
            </div>
        </header>
    )
}